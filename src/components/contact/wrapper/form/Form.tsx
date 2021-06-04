import React, { useState } from 'react';
import validateForm from './validateForm';
import isEmpty from '../../../../utils/isEmpty';

import { Button, Grid } from '@material-ui/core';
import TextArea from '../common/TextArea';
import Input from '../common/Input';

const encode = (data: IData) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Form: React.FC = () => {
  const [state, setState] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState({ name: '', email: '', message: '' });

  const { name, email, message } = state;

  const onChange = ({ target: { name, value }}: IOnChange): void => setState({ ...state, [name]: value });
  
  const onFocus = ({ name }: { name: string }): false | void => {
    const obj: IIndexable = { ...error };
    !isEmpty(obj[name]) && setError({ ...error, [name]: '' });
  };

  const onSubmit = (e:React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { errors, isValid } = validateForm(state);
    if(!isValid) return setError({ ...error, ...errors });

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message }),
    })
    .then(() => setState({ name: '', email: '', message: '' }))
    .catch(error => alert(error))
  };
  
  return (
    <Grid 
      xs={12} container item onSubmit={onSubmit}
      component='form' method="post" name="contact" data-netlify="true" data-netlify-honeypot="bot-field" noValidate hidden
    >
      {/* hidden form field neccessary for netlify form submission */}
      <input name="form-name" value="contact" hidden />
      <Input
        label={'Name'}
        name='name'
        value={name}
        onChange={onChange}
        onFocus={onFocus}
        error={error.name}
        type='text'
      />
      <Input
        label={'Email'}
        name='email'
        value={email}
        onChange={onChange}
        onFocus={onFocus}
        error={error.email}
        type='email'
      />
      <TextArea 
        label={'Message'}
        name='message'
        value={message}
        onChange={onChange}
        onFocus={onFocus}
        error={error.message}
        type='text'
      />
      <Button type='submit' variant='outlined' color='primary' >Submit</Button>
    </Grid>
  );
};

interface IData {
  [key: string]: string
  name: string
  email: string
  message: string
};

export default Form;