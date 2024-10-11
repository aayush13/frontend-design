import { useEffect, useState } from "react";
import { getSearchData } from "../../../services";
import TitleBox from "../../common/TitleBox";
import "react-datepicker/dist/react-datepicker.css";
import {
  SearchEngineContainer,
  MainFrame,
  UserBarBox,
  SearchContainer,
  InputFieldContainer,
  SearchButtonContainer,
  FilterContainer,
  FilterDiv,
  ClearFilter,
  ClearButton,
  ResultHeaderContainer,
  ResultTitle,
  ResultController,
  ResultCardContainer,
  NewCardContainer,
  FilterDivDate,
  StyledDatePicker,
  ResultTitleContainer,
  SizeDropdown,
  SortDropdown,
  Pagination,
  ResultCounter
} from "./styles";
import UserBar from "../UserBar";
import SearchBar from "../../common/SearchBar";
import Button from "../../common/Button";
import Dropdown from "../../common/Dropdown";

import Card from "../../common/Card";
import Separator from "../../common/Separator";
import PaginationController from "../../common/PaginationController";
import { UserBarContainer } from "../UserBar/styles";

const SearchEngine = () => {
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);


  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const num = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
  ];
  useEffect(() => {
    getPageData();
  }, []);

  const getPageData = () => {
    setData(getSearchData());
  };


    const itemsPerPage = 5; 
    // Calculate total pages
    const totalPages = Math.ceil(data.length / itemsPerPage);
  
    // Get current page items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
   
  };

  return (
    <SearchEngineContainer>
      <UserBarBox>
        <UserBar />
      </UserBarBox>
      <MainFrame>
        <TitleBox />
        <SearchContainer>
          <InputFieldContainer>
            <SearchBar />
          </InputFieldContainer>
          <SearchButtonContainer>
            <Button type="primary" label="Search"/>
          </SearchButtonContainer>
        </SearchContainer>
        <FilterContainer>
          <FilterDiv>
            <Dropdown placeholder="Category" name="category" options={options} isClearable={true} isSearchable={true} />
          </FilterDiv>
          <FilterDiv>
            <Dropdown placeholder="Decision" name="decision" options={options} isClearable={true} isSearchable={true} />
          </FilterDiv>
          <FilterDiv>
            <Dropdown placeholder="Company" name="company" options={options} isClearable={true} isSearchable={true} />
          </FilterDiv>
          <FilterDivDate>
            <StyledDatePicker

              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Date"
            />
          </FilterDivDate>
        </FilterContainer>
        <ClearFilter>
          <ClearButton>
            <Button type="clear" label="Clear Filters" />
          </ClearButton>
        </ClearFilter>
        <ResultHeaderContainer>
          <ResultTitleContainer>
            <ResultTitle>Results</ResultTitle>
            <ResultCounter>Showing {indexOfFirstItem+1}-{indexOfLastItem} of {data.length}</ResultCounter>
          </ResultTitleContainer>
          <ResultController>
            <SortDropdown>
              <Dropdown name="sortBy" options={options} isClearable={true} isSearchable={true} />
            </SortDropdown>
            <SizeDropdown>
              <Dropdown name="number" options={num} isClearable={true} isSearchable={true} />
            </SizeDropdown>
          </ResultController>
        </ResultHeaderContainer>
        <ResultCardContainer>
          {currentItems.map((item, index) => {
            return (
              <NewCardContainer>
                <Card item={item} key={index}/>
                <Separator />
              </NewCardContainer>
            )
          })}
        </ResultCardContainer>
        <Pagination>
          <PaginationController handlePageChange={handlePageChange} currentPage={currentPage} totalPages={totalPages}/>
        </Pagination>
      </MainFrame>
    </SearchEngineContainer>
  );
};

export default SearchEngine;
