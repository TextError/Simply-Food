import React from 'react';
import isEmpty from "./isEmpty";
import { TextField, TextareaAutosize } from "@material-ui/core";

const TextArea: React.FC<IProps> = ({ label, name, value, onChange, onFocus, error, helperText, type }) => (
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
    multiline
    InputProps={{
      inputComponent: TextareaAutosize,
      rows: 3
    }}
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

export default TextArea;