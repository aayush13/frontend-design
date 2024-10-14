import { useState } from "react";
import Select from "react-select";


const Dropdown = (props) => {
  const [isClearable, setIsClearable] = useState(props.isClearable);
  const [isSearchable, setIsSearchable] = useState(props.isSearchable);
  
  return <Select
      className={props.name}
      classNamePrefix="select"
      defaultValue={props.default || ''}
      isClearable={isClearable}
      isSearchable={isSearchable}
      onChange={props.onChange}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      options={props.options}/>;
};

export default Dropdown;
