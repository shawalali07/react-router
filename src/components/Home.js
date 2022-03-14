import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate('order-summary', { replace: true })}>
        Place Order
      </button>
      <div>Home Page</div>
    </>
  );
};

export default Home;
