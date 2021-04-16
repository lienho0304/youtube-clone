import React from "react";
import styled, { css } from "styled-components";

function SideBarRow({ Icon, name,selected}) {
  
  return (
    <Container selected={selected}>
      <i>
        <Icon  />
      </i>
      <p>{name}</p>
    </Container>
  );
}

export default SideBarRow;
const Container = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  >i {
      color:gray;
  }
  :hover {
    background-color: whitesmoke;
    > i {
      color: red;
      object-fit:contain
    }
    > p {
      font-weight: bold;
    }
  }
  > p {
    font-size: 8px;
    margin-left: 8px;
    flex: 1;
  }
  ${props => props.selected && css`
  background-color: whitesmoke;
  > i {
      color: red;
    }
    > p {
      font-weight: bold;
    }
  `}
`;
