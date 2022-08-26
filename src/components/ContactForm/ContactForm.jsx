import React, { Component } from 'react';
import style from './ContactForm.module.css';

class ContactAdd extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSumbit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    this.props.addContact(name, number);
    this.clearState();
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  clearState = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSumbit} className={style.form}>
        <strong>Name</strong>
        <br />
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          value={name}
          placeholder="Homer Simpson"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <br />
        <strong>Number</strong>
        <br />
        <input
          onChange={this.handleChange}
          type="tel"
          name="number"
          value={number}
          placeholder="044-444-00-44"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <br />
        <button>Add contact</button>
      </form>
    );
  }
}

export default ContactAdd;
