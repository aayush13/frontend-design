import {Input} from "./styles";

const InputField = (props) => {
  return (
    <Input type={props.type} placeholder={props.placeholder}/>
  );
};

export default InputField;
