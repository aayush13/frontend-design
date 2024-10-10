import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    padding: 2em 0em;
    // border: thin solid black;
`;

export const DateContainer = styled.div`

`;

export const Date = styled.span`
    font-weight: 600;

`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
`;

export const CardTitle = styled.h2`
    font-weight: 400;
    color: #26C281;

`;

export const Description = styled.span`
    color: #6F7170;
`;

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    justify-content: space-between;
    margin-top:1.5em;
`;

export const DetailLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    width:33%
`;

export const DetailLabel = styled.span`
    font-weight: 400;
`;

export const DetailValue = styled.span`
    font-weight: 600;
`;

export const LineContainer = styled