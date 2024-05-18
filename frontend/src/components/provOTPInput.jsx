// OTPInput.js
import React from 'react';

const ProviderOTPInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      maxLength={6} // Set the maximum length of OTP
    />
  );
};

export default ProviderOTPInput;
