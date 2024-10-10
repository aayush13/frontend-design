import { useState } from "react";
import Select from "react-select";


const Dropdown = (props) => {
  const [isClearable, setIsClearable] = useState(props.isClearable);
  const [isSearchable, setIsSearchable] = useState(props.isSearchable);
  
  return <Select
      className={props.name}
      classNamePrefix="select"
      defaultValue={props.name}
      isClearable={isClearable}
      isSearchable={isSearchable}
      name={props.name}
      placeholder={props.placeholder}
      options={props.options}/>;
};

export default Dropdown;
