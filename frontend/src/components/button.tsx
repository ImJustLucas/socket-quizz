import React, { useState } from 'react';

const Button = () => {
  const [text, setText] = useState('Cliquez ici');

  const handleClick = () => {
    setText('Texte modifié !');
  };

  return (
    <button onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;

