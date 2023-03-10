import React from 'react';
import './category.css';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categoriesReducer);

  const dispatch = useDispatch();

  return (
    <div className="status-log">
      <div>
        {categories && categories.map((category) => (
          <p key={category}>
            {category}
          </p>
        ))}
      </div>
      <button
        type="button"
        id="updated-log"
        name="update"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        Check Status
      </button>
    </div>
  );
};

export default Categories;
