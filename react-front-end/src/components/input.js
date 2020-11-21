
//Gary's input

import React, { useState } from 'react';

const Input = function (props) {
  console.log("Render Input Component");
  const [text, setText] = useState(props.text);

  const change = function (event) {
    setText(event.target.value);
  };
  const save = function () {
    props.onSave(text);
  };

  return (
    <>
      <input type="text" value={text} onChange={change}></input>
      <button onClick={save}>{props.label}</button>
    </>

  );
};
export default Input;