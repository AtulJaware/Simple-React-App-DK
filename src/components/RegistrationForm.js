import React, { useState } from 'react';
import './RegistrationForm.css';
const RegistrationForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    comment: '',
    gender: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic goes here
    if (!formData.agreeTerms) return alert('Please accept the terms and conditions');
    onRegister(formData);
  };

  return (
    <body>
    <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
    <label>
      Name:
      <input
      className='input-field'
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </label>
    <label>
  Country:
  <select
  className='input-field'
    name="country"
    value={formData.country}
    onChange={handleChange}
    required
  >
    <option value="">Select Country</option>
    <option value="usa">United States</option>
    <option value="canada">Canada</option>
    <option value="uk">United Kingdom</option>
    <option value="india">India</option>
  </select>
</label>
    <label>
      Comment:
      <textarea
      className='input-field'
        name="comment"
        value={formData.comment}
        onChange={handleChange}
        required
      ></textarea>
    </label>
    <label>
      Gender:
      <label>
          Male
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === 'male'}
          onChange={handleChange}
          required
        />
      </label>
      <label>
          Female
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === 'female'}
          onChange={handleChange}
          required
        />
      </label>
    </label>
        <input
          type="checkbox"
          name="agreeTerms"
          checked={formData.agreeTerms}
          onChange={handleCheckboxChange}
          required
        />
        <label>
          I agree to the Terms and Conditions
        </label><br/><br/>
    <button style={{textAlign:'center',margin: '0 auto',
    display: 'block', backgroundColor:'green'}} type="submit">Submit</button>
  </form>
  </body>
  );
};

export default RegistrationForm;
