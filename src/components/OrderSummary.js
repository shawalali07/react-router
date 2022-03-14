import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <button onClick={() => navigate('/about')}>Back</button> */}
      <button onClick={() => navigate(-1)}>Back</button>
      <div>Order Confirmed!</div>
    </>
  );
};

export default OrderSummary;
