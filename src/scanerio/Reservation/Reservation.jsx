import React,{useState, useEffect} from 'react'
import './Reservation.css'

import axios from 'axios';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Reservation = () => {

  const validationSchema = Yup.object({
    reservationName: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    people: Yup.string().required('Select Number of people'),
    date: Yup.string().required("Select Date"),
    time: Yup.string().required("Select time"),
  });


  const fetchAPI = async (date) => {
    try {
      // Replace this with your actual API endpoint URL
      const apiUrl = 'https://api.example.com/reservations';

      // Assuming the API accepts a date parameter in the format 'YYYY-MM-DD'
      const formattedDate = date.toISOString().substr(0, 10);

      // Make the API call using fetch
      const response = await fetch(`${apiUrl}?date=${formattedDate}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the response JSON
      const data = await response.json();
      console.log(data);
      // Simulating the response with available reservation times
      // Replace this with the actual data from your API response
      const availableTimes = ['18:00', '19:00', '20:00', '21:00'];

      return availableTimes;
    } catch (error) {
      // Handle any errors that occurred during the API call
      console.error('Error fetching available times:', error);
      throw error;
    }
  };

  const submitAPI = async () => {
    try {
      // Make the API request using axios or any other HTTP client library
      const response = await axios.post('your-api-endpoint', formData);

      // Handle the response or perform any necessary actions
      console.log('API Response:', response.data);
    } catch (error) {
      // Handle errors, if any
      console.error('API Error:', error);
    }
  };

  // State to hold form data
  const [formData, setFormData] = useState({
    reservationName: '',
    people: '',
    date: new Date(),
    time: '',
    email:''
  });

  //Fetching Reservation Data
  const fetchAvailableTimes = async (date) => {
    try {
      const times = await fetchAPI(date);
      setFormData((prevData) => ({
        ...prevData,
        time: times, // Assuming `times` is an array of available times
      }));
    } catch (error) {
      console.error('Error fetching available times:', error);
    }
  };

  useEffect(() => {
    fetchAvailableTimes(new Date());
    // eslint-disable-next-line
  }, []);

  // Event handler for form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle date and time change
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      date: selectedDate,
    }));
    fetchAvailableTimes(selectedDate);
  };

  // Event handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    alert(`${formData.reservationName}: Your Table has been Reserved, You will soon recieve conformation Email`);
    submitAPI();
  };

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, isValid }) => (
        <Form className='form'>
      <div>
        <div className='people'>
          <h4>No of People: {formData.people} </h4>
          <p>*Click Buttons to change number of people</p>
          <div className='buttonRow'>
            <div className='peopleNumber' onClick={() => setFormData({ ...formData, people: "2" })}><p>2</p></div>
            <div className='peopleNumber' onClick={() => setFormData({ ...formData, people: "4" })}><p>4</p></div>
            <div className='peopleNumber' name='8' onClick={() => setFormData({ ...formData, people: "8" })}><p>8</p></div>
            <div className='peopleNumber' name='10+' onClick={() => setFormData({ ...formData, people: "10+" })}><p>10 or more</p></div>
            <ErrorMessage name="people" component="div" />
          </div>
        </div>
        <hr style={{ margin: "10px 0" }} />
        <br />
        <div className='dateAndTime'>
          <h4>Select date and Time</h4>
          <div className='selection'>
            <input type="date" name="date" id="date" value={formData.date}  onChange={handleDateChange} />
            <ErrorMessage name="date" component="div" />
            <select name="time" id='time' value={formData.time} onChange={handleChange}>
              <option value="">Please select time</option>
              <option value="18:00">18:00 / 6pm</option>
              <option value="19:00">19:00 / 7pm</option>
              <option value="20:00">20:00 / 8pm</option>
              <option value="21:00">21:00 / 9pm</option>
            </select>
             <ErrorMessage name="email" component="div" />
          </div>
        </div>
        <hr style={{ margin: "10px 0" }} />
        <br />
        <div className='reservationName'>
          <h4>Enter Reservation Name</h4>
          <input
            type="text"
            placeholder="Reservation Name"
            id="reservationName"
            name='reservationName'
            value={formData.reservationName}
            onChange={handleChange} />
          <ErrorMessage name="reservationName" component="div" />
        </div>
        <hr style={{ margin: "10px 0" }} />
        <br />
        <div className='email'>
          <h4>Enter your email</h4>
          <input
            id='email'
            name='email'
            type="email"
            placeholder='your@email.com'
            value={formData.email}
            onChange={handleChange}
          />
          <ErrorMessage name="email" component="div" />
        </div>
        <br />
        <button className='button-secondary' type='submit'disabled={isSubmitting || !isValid} // Disable if form is submitting or invalid
        >
        Reserve Table
        </button>
      </div>
      </Form>
      )}
    </Formik>
  );
};

export default Reservation