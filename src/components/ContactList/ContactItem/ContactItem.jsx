import React from 'react';
import style from '../ContactList.module.css';

const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <li>
      {name}: {number}
      <button
        className={style.btn}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
