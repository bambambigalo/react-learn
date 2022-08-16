import React from 'react';
import './cssUI/MyInput.css';

function MyInput(props) {
  const { onChange, value } = props;
  return (
    <div className="MyInput__comp">
      <input
        onChange={onChange}
        value={value}
        className="MyInput__input"
        type="text"
        placeholder="Поиск..."
      />
    </div>
  );
}

export default MyInput;
