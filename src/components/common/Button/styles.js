import styled from "styled-components";

export const Button = styled.button`
    ${(props) => {
        switch (props.type) {
          case 'primary':
            return `
                width: 100%;
                height: 4em;
                background: #26C281;
                border: none;
                border-radius: 5px;
                color: white;
            `;
          case 'clear':
            return `
              border: none;
              background: none;
              color: #008347;
              font-weight: 600;
            `;
            case 'pagination':
                return `
                  height: 2.5em;
                  width: 2.25em;
                  border: none;
                  background: none;
                  ${props.active ? `
                    color: #26C281;
                    ` : `
                    color: black;
                    `}  
                `;
                case 'arrow':
                    return `
                      height: 2.5em; 
                      width: 2.25em; 
                      background: none;
                      border-radius: 5px 0px 0px 5px;
                    `;
        }
        
    }}

`;