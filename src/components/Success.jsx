
import React from 'react';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <div>
      <h2>Giriş Başarılı!</h2>
  
      <Link to="/todo">To-Do Listesine Git</Link>
    </div>
  );
}

export default Success;



