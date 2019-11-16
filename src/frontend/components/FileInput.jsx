/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import '../assets/styles/components/FileInput.scss';

const FileInput = ({ name, onChange }) => {
  const defaultLabelText = 'Seleccione un archivo';
  const [filename, changeName] = useState(defaultLabelText);
  const fileOnChange = (event) => {
    if (event.currentTarget.files.length > 0) {
      changeName(event.currentTarget.files[0].name);
    } else changeName(defaultLabelText);
    onChange(event);
  };
  return (
    <div className='file__input'>
      <input type='file' id={name} name={name} onChange={fileOnChange} />
      <label htmlFor={name}>
        {filename}
      </label>
    </div>
  );
};

export default FileInput;
