import styled from "styled-components";
import DatePicker from "react-datepicker";

export const SearchEngineContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    
`;

export const MainFrame = styled.div`
    width: 75%;
    padding-left: 9.7em;
    padding-right: 9.375em;

`;

export const UserBarBox = styled.div`
    width:100%
    margin-top: 1.5em;
    margin-right: 3.5em;
`;

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 4em;
`;

export const SearchButtonContainer = styled.div`
    width:25%;
`;

export const InputFieldContainer = styled.div`
    width:75%;
    margin-right:1em;
`;

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 2em;
`;


export const FilterDiv = styled.div`
    width:24%;
    margin-right: 1em;
`;

export const FilterDivDate = styled.div`
    width:24%;
`;


export const ClearFilter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
    margin-top: 2em;
`;

export const ClearButton = styled.div`
    
`;

export const ResultHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin:2em 0em;
    
`;
export const ResultTitle = styled.h2`
    margin: 0em;

`;

export const ResultCounter = styled.p `
    margin: 0em;
`;
export const ResultTitleContainer= styled.div`
    display: flex;
    flex-direction: column;
`;

export const ResultController = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 35%;
`;

export const SizeDropdown = styled.div`
    margin-right:0.5em;
`;
export const SortDropdown = styled.div`
    margin-left:0.5em;
`;

export const ResultCardContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const NewCardContainer = styled.div`
   width:100%;
`;

export const StyledDatePicker = styled(DatePicker)`
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
`;

export const Pagination = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    margin-bottom: 15.625em;
`;
