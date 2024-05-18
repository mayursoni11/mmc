// LoginPage.js
import React, { useEffect, useState } from 'react';
import ProviderOTPInput from '../../components/provOTPInput'; // Assume you have an OTP input component

const ProviderLoginPage = ({ history }) => {
  const [otp, setOTP] = useState('');
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data);
        console.log(data);
      }
    )
  }, []

  );

  const handleLogin = () => {
    // Handle OTP verification and login logic here
    if (otp === '123456') { // Replace '123456' with your actual OTP
      // Redirect to dashboard or home page on successful login
      alert('Successfully logged in.');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div>
      <h2>OTP-based Login</h2>
      <ProviderOTPInput value={otp} onChange={setOTP} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default ProviderLoginPage;
