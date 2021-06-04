import Validator from 'validator';
import isEmpty from '../../../../utils/isEmpty';

interface IProps {
  name: string
  email: string
  message: string
};

interface IReturn {
  errors: IErrors
  isValid: boolean
};

interface IErrors {
  name?: string
  email?: string
  message?: string
};

const validateForm = ({ name, email, message }: IProps): IReturn=> {
  let errors: IErrors = {};

  name = !isEmpty(name) ? name : '';
  email = !isEmpty(email) ? email : '';
  message = !isEmpty(message) ? message : '';

  if(!Validator.isLength(name, { min: 2, max: 50 })) errors.name = 'Name field is invalid!';
  if (!Validator.isEmail(email)) errors.email = 'Email field is invalid!';
  if(!Validator.isLength(message, { min: 10, max: 500 })) errors.message = 'Message field is invalid!';


  if (Validator.isEmpty(name)) errors.name = 'Name field is required!';
  if (Validator.isEmpty(email)) errors.email = 'Email field is required!';
  if (Validator.isEmpty(message)) errors.message = 'Message field is required!';

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validateForm;