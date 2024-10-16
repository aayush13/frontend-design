
import Button from "../Button";
import { PaginationControl, PaginationControlContainer,PageNumberButton } from "./styles";
const PaginationController = (props) => {
  
  return (
    <PaginationControlContainer>
      <PaginationControl>
        <Button
          type="arrow"
          label="<"
          onClick={() => props.handlePageChange(props.currentPage - 1)}
          disabled={props.currentPage === 1}
        />

        {Array.from({ length: props.totalPages }, (_, index) => (

          <PageNumberButton key={index}>
            <Button
                type="pagination"
                id={"page-" + index}
                onClick={() => props.handlePageChange(index + 1)}
                label={index + 1}
                active={index + 1 === props.currentPage}
                
            />
          </PageNumberButton>
        ))}

        <Button
          type="arrow"
          label=">"
          onClick={() => props.handlePageChange(props.currentPage + 1)}
          disabled={props.currentPage === props.totalPages}
        />
      </PaginationControl>
    </PaginationControlContainer>
  );
};

export default PaginationController;
