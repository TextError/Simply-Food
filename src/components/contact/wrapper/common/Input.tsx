import React from 'react';
import { TextField } from "@material-ui/core";
import isEmpty from '../../../../utils/isEmpty';

const Input: React.FC<IProps> = ({ label, name, value, onChange, onFocus, error, helperText, type }) => (
  <TextField
    label={isEmpty(error) ? label : error}
    name={name}
    value={value}
    onChange={e => onChange(e)}
    onFocus={() => onFocus({ name })}
    error={!isEmpty(error)}
    helperText={helperText}
    type={type}
    focused={error ? true : undefined}
    id={`outlined-${label}`}
    variant="outlined"
  />
);

interface IProps {
  label: string
  name: string
  value: string
  onChange: (e:React.InputHTMLAttributes<HTMLInputElement> & { target: { name: string, value: string }}) => void
  onFocus: ({ name }: { name: string }) => void
  error: string
  helperText?: string
  type: string
};

export default Input;