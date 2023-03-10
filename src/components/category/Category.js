import React, { useState } from 'react';
import './category.css';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

function Categories() {
  const [msgPlaceholder, setMsg] = useState('');

  const dispatch = useDispatch();

  dispatch(checkStatus());
  const msg = useSelector((state) => state.handleStatus);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg(msg);
  };

  return (
    <div className="status-log">
      <button id="updated-log" onClick={handleSubmit} type="submit">Check Status</button>
      <p>{msgPlaceholder}</p>
    </div>
  );
}

export default Categories;
