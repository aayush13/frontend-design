import * as S from "./styles";

const Button = props => {
  return (
    <S.Button id={props.id} key={props.key || 0} type={props.type} onClick={props.onClick} disabled={props.disabled} active={props.active}>
      {props.label}
    </S.Button>
  );
};

export default Button;
