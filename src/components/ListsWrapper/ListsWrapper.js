import React from 'react';
import './ListsWrapper.css';

const ListsWrapper = ({ children }) => {
  return (
    <div className="list-wrapper">
      { children }
    </div>
  )
};

export default ListsWrapper;