import React from 'react';

const ErrorExample = () => {
  let title = 'omar'
  const handler = () => {
    title ='hi'
    console.log(title)
  }
  return <React.Fragment>
    <h2>title will be changed</h2>
    <button type='button' className='btn' onClick={handler}>change the title</button>
  </React.Fragment>
};

export default ErrorExample;
