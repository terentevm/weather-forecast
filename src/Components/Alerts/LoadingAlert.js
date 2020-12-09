import React from 'react';

export default  function ({ message }) {
  return (
    <div className="alert alert-primary" role="alert">
      { message }
    </div>
  )
}