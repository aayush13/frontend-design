import {
  CardContainer,
  DateContainer,
  Date,
  TitleContainer,
  CardTitle,
  Description,
  DetailsContainer,
  DetailLabelContainer,
  DetailLabel,
  DetailValue,
} from "./styles";

const Card = (props) => {
  const item = props.item;
  console.log()
  return (
      <CardContainer>
        <DateContainer>
          <Date>{item.date}</Date>
        </DateContainer>
        <TitleContainer>
          <CardTitle>{item.title}</CardTitle>
          <Description>{item.content}</Description>
        </TitleContainer>
        <DetailsContainer>
          <DetailLabelContainer>
            <DetailLabel>Category</DetailLabel>
            <DetailValue>{item.category}</DetailValue>
          </DetailLabelContainer>
          <DetailLabelContainer>
            <DetailLabel>Decision</DetailLabel>
            <DetailValue>{item.decision}</DetailValue>
          </DetailLabelContainer>
          <DetailLabelContainer>
            <DetailLabel>Company</DetailLabel>
            <DetailValue>{item.company}</DetailValue>
          </DetailLabelContainer>
        </DetailsContainer>
      </CardContainer>
  );
};

export default Card;
