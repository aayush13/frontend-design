import * as S from "./styles";

const Button = props => {
  return (
    <S.Button data-testid={props.id} type={props.type} onClick={props.onClick} disabled={props.disabled} active={props.active}>
      {props.label}
    </S.Button>
  );
};

export default Button;
