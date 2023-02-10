import styled from "styled-components";

// styled-componentsのAdd Dependencyが必要

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>- styled-components -</STitle>
      <SButton>FIGHT</SButton>
    </SContainer>
  );
};

// ぱっと見styled-componentsと分かるように接頭語でSを入れることが多い
const SContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: #392eff;
`;

const SButton = styled.button`
  background-color: #aabbee;
  border: none;
  padding: 8px;
  border-radius: 8px;
  // sassの記法が使える
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
