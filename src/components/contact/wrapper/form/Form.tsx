import React, { useState } from 'react';
import isEmpty from "../common/isEmpty";
import { IIndexable, IOnChange } from "../common/interface";

import { Paper } from '@material-ui/core';
import Input from '../common/Input';

const Form: React.FC = () => {
  const [state, setState] = useState({ name: '', email: ''});
  const [error, setError] = useState({ name: '', email: '' });

  const { name, email } = state;

  const onChange = ({ target: { name, value }}: IOnChange): void => setState({ ...state, [name]: value });
  
  const onFocus = ({ name }: { name: string }): false | void => {
    const obj: IIndexable = { ...error };
    !isEmpty(obj[name]) && setError({ ...error, [name]: '' });
  };
  
  return (
    <Paper>
      <Input
        label={'Name *'}
        name='name'
        value={name}
        onChange={onChange}
        onFocus={onFocus}
        error={error.name}
        type='name'
      />
      <Input
        label={'Email *'}
        name='email'
        value={email}
        onChange={onChange}
        onFocus={onFocus}
        error={error.email}
        type='email'
      />
    </Paper>
  )
}

export default Form;