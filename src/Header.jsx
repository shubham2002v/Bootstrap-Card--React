import React, { useState, useEffect } from 'react';

const textArray = [
  'React Bootstrap NPM',
  'Changing Text Example',
  'Infinite Text Loop',
];

const Header = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <center>
        <h1>{textArray[textIndex]}</h1>
      </center>
    </>
  );
};

export default Header;
