import classes from "./CssModules.module.scss";

// node-sassのAdd Dependencyが必要

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- Css Modules -</p>
      <button className={classes.button}>FIGHT</button>
    </div>
  );
};
