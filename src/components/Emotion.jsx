// 下記の記述が必要
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

// @emotion/react、@emotion/styledのAdd Dependencyが必要
export const Emotion = () => {
  // 書き方１つ目：sassと同じ方法
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  // 書き方２つ目：inlinestyleと同じ方法
  const titleStyle = css({
    margin: 0,
    color: "#3d84a8"
  });

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <SButton>FIGHT</SButton>
    </div>
  );
};

// 書き方3つ目：styled-componentsと同じ方法
const SButton = styled.button`
  background-color: #aabbee;
  border: none;
  padding: 8px;
  border-radius: 8px;
  // 純粋なcssなので下記のようなsassの記法が使える
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
