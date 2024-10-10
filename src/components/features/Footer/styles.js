import styled from "styled-components";

export const FooterContainer = styled.div`
    background: #F7FCFA;
    display:flex;
    flex-direction: column;
`;
export const FooterFrame = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    
`;

export const CompanyDetails= styled.div`
    display:flex;
    flex-direction: column;
     color: #6F7170;
`;

export const Tagline = styled.p`
    color: #6F7170;
`;

export const ReferenceLinks = styled.div`
    display: flex;
    flex-direction: row;
`;

export const QuickLinks = styled.div`
    display: flex;
    flex-direction: column;
    margin-right:3em;
`;


export const Legals = styled.div`
    display: flex;
    flex-direction: column;
    margin-left:3em;
`;

export const FooterListItem = styled.p`
    color: #6F7170;
    margin-block-start: .5em;
    margin-block-end: 0.5em;
`;

export const FooterContentContainer = styled.div`
    padding: 2.5em 4em 1.5em 10.625em;
`;

export const FooterListHeader = styled.p`
    font-weight: 700;
    margin-block-start: .5em;
    margin-block-end: 0.5em;
`;

export const Contact = styled.div``;
export const AddressLine = styled.p``;
export const Tel= styled.p``;
export const Email = styled.p``; 

export const CopyrightDetails = styled.div`
    display: flex;
    flex-direction: row;
    color: #6F7170;
    justify-content: space-between;
`;

export const CopyrightName = styled.div`
    display: flex;
    align-content: center;
    flex-wrap: wrap;
`;

export const SocialMedia = styled.div`
    display: flex;
    flex-direction: row;
`;

export const MediaIcons = styled.div`
    width: 1.5em;
    height: 1.5em;
    margin-right: 0.5em;

    &:last-child {
        margin-right: 0;
    }
`;
