// styled-jsxのAdd Dependencyが必要
// styled-jsxはNuxt.jsにはデフォルトで入っている

export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled JSX -</p>
        <button className="button">FGIHT</button>
      </div>

      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #392eff;
        }
        .button {
          background-color: #aabbee;
          border: none;
          padding: 8px;
          border-radius: 8px;
          // sassの記法は使えない
        }
      `}</style>
    </>
  );
};
