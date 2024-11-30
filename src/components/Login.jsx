import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'; 

function Login({ loginHandler }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false); 
  const navigate = useNavigate();


  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


  const validatePassword = (password) => {
    return password.trim().length >= 4;
  };
  


  const validateForm = () => {
    const formErrors = {};
    let isValid = true;

  
    if (!email || !validateEmail(email)) {
      formErrors.email = 'Geçerli bir email adresi girin.';
      isValid = false;
    }

  
    if (!password || !validatePassword(password)) {
      formErrors.password = 'Şifre en az 4 karakter olmalıdır.';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid; 
  };


  const handleLogin = (event) => {
    event.preventDefault();
    if (validateForm()) {
      loginHandler(); 
      navigate('/success'); 
    }
  };

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

 
  useEffect(() => {
    if (validateForm()) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [email, password]); 

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            data-cy="email-input"
          />
          {errors.email && <span className="error-message" data-cy="error-message">{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="password">Şifre:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            data-cy="password-input"
          />
          {errors.password && <span className="error-message" data-cy="error-message">{errors.password}</span>}
        </div>
        <button type="submit" disabled={!isValid} data-cy="button-submit">
          Giriş Yap
        </button>
      </form>
    </div>
  );
}




export default Login;

