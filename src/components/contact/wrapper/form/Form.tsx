import React, { useState } from 'react';
import isEmpty from '../../../../utils/isEmpty';

import { Button, Grid } from '@material-ui/core';
import Input from '../common/Input';
import TextArea from '../common/TextArea';

const Form: React.FC = () => {
  const [state, setState] = useState({ name: '', email: '', message: ''});
  const [error, setError] = useState({ name: '', email: '', message: '' });

  const { name, email, message } = state;

  const onChange = ({ target: { name, value }}: IOnChange): void => setState({ ...state, [name]: value });
  
  const onFocus = ({ name }: { name: string }): false | void => {
    const obj: IIndexable = { ...error };
    !isEmpty(obj[name]) && setError({ ...error, [name]: '' });
  };

  const onSubmit = (e:React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

  };
  
  return (
    <Grid component='form' md={5} sm={6} xs={12} container onSubmit={onSubmit} noValidate >
      <Input
        label={'Name'}
        name='name'
        value={name}
        onChange={onChange}
        onFocus={onFocus}
        error={error.name}
        type='name'
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
        label={'Message here'}
        name='message'
        value={message}
        onChange={onChange}
        onFocus={onFocus}
        error={error.message}
        type='text'
      />
      <Button type='submit' variant='outlined' >Submit</Button>
    </Grid>
  );
};

export default Form;