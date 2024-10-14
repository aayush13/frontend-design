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
  ResultCounter,
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
  const [showData, setShowData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState(null);
  const [decision, setDecision] = useState(null);
  const [company, setCompany] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  const itemsPerPage = 5;
  const options = [
    { value: "Category", label: "Category" },
    { value: "Decision", label: "Decision" },
    { value: "Company", label: "Company" },
  ];
  const num = [
    { value: 5, label: "5" },
  ];
  useEffect(() => {
    getPageData();
  }, []);


  const getPageData = () => {
    const data = getSearchData()
    setData(data);
    setShowData(data)
    setTotalPages( Math.ceil(data.length / itemsPerPage))
  };

  const getUniqueValues = (key) => {
    const uniqueValues = [...new Set(data.map(item => item[key]))];
    return uniqueValues.map(item => ({ value: item, label: item }));
  };

  const filterTicket = async() => {
    let filterData = data
    if(!company && !category && ! decision && !selectedDate) {
      setTotalPages( Math.ceil(data.length / itemsPerPage))
      return data;
    }
    if(company) {
      filterData = filterData.filter(item => item.company === company.value);
    }
    if(decision) {
      filterData = filterData.filter(item => item.decision === decision.value);
    }
    if(category) {
      filterData = filterData.filter(item => item.category === category.value);
    }

    setTotalPages( Math.ceil(filterData.length / itemsPerPage))
    setShowData(filterData);
  }
  useEffect(() => {
    filterTicket()
  },[category,company,decision])

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = showData.slice(indexOfFirstItem, indexOfLastItem);
  
  const uniqueCompanies = getUniqueValues('company');
  const uniqueDecisions = getUniqueValues('decision');
  const uniqueCategories = getUniqueValues('category');


  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  const clearFilters = () => {
    setShowData(data)
    setCategory(null)
    setCompany(null)
    setDecision(null)
    setSelectedDate(null)
  }
  
  const handleCategoryChange = (e) => {
    setCategory(e)

  }
  const handleCompanyChange = (e) => {
    setCompany(e)
    // let filterData =  !category && !decision ? data : showData;
    // filterData = filterData.filter(item => item.company === e.value);
    // setShowData(filterData);
    // setTotalPages( Math.ceil(filterData.length / itemsPerPage))
  }
  const handleDecisionChange = (e) => {
    setDecision(e)
    // let filterData =  !company && !category ? data : showData;
    // filterData = filterData.filter(item => item.decision === e.value);
    // setShowData(filterData);
    // setTotalPages( Math.ceil(filterData.length / itemsPerPage))
  }

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
            <Button type="primary" label="Search" />
          </SearchButtonContainer>
        </SearchContainer>
        <FilterContainer>
          <FilterDiv>
            <Dropdown placeholder="Category" name="category" value={category} onChange= {(e) => handleCategoryChange(e)} options={uniqueCategories}  isSearchable={true} />
          </FilterDiv>
          <FilterDiv>
            <Dropdown placeholder="Decision" name="decision" value={decision} onChange= {(e) => handleDecisionChange(e)} options={uniqueDecisions}  isSearchable={true} />
          </FilterDiv>
          <FilterDiv>
            <Dropdown placeholder="Company" name="company" value={company} onChange= {(e) => handleCompanyChange(e)} options={uniqueCompanies} isSearchable={true} />
          </FilterDiv>
          <FilterDivDate>
            <StyledDatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} placeholderText="Date" />
          </FilterDivDate>
        </FilterContainer>
        <ClearFilter>
          <ClearButton>
            <Button type="clear" label="Clear Filters" onClick={()=> clearFilters()} />
          </ClearButton>
        </ClearFilter>
        <ResultHeaderContainer>
          <ResultTitleContainer>
            <ResultTitle>Results</ResultTitle>
            <ResultCounter>
              Showing {indexOfFirstItem + 1}-{indexOfLastItem} of {showData.length}
            </ResultCounter>
          </ResultTitleContainer>
          <ResultController>
            <SortDropdown>
              <Dropdown placeholder="Sort By" name="sortBy" options={options} isClearable={true} isSearchable={true} />
            </SortDropdown>
            <SizeDropdown>
              <Dropdown placeholder="Size" default={num[0]} name="number" options={num} isClearable={false} isSearchable={true} />
            </SizeDropdown>
          </ResultController>
        </ResultHeaderContainer>
        <ResultCardContainer>
          {currentItems.map((item, index) => {
            return (
              <NewCardContainer key={index}>
                <Card item={item} key={index} />
                <Separator />
              </NewCardContainer>
            );
          })}
        </ResultCardContainer>
        <Pagination>
          <PaginationController handlePageChange={handlePageChange} currentPage={currentPage} totalPages={totalPages} />
        </Pagination>
      </MainFrame>
    </SearchEngineContainer>
  );
};

export default SearchEngine;
