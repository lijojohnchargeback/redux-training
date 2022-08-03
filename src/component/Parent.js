import React, { Fragment } from "react";
import ChildComponent from "./Child";
import TitleComponent from "./Title";
const ParentComponent = () => {
  const [age, setAge] = React.useState(0);
  const [salary, setSalary] = React.useState(200);
  const handleClickAge = () => {
    setAge(age + 1);
  };
  const handleClickSalary = () => {
    setSalary(salary + 300);
  };
  const isEven = () => {
    let i = 0;
    while (i < 2000020200) i++;
    return age % 2 == 0;
  };
  return (
    <Fragment>
      <TitleComponent />
      <ChildComponent count={salary} text="salary" />
      <span>{isEven() ? "Even" : "Odd"}</span>
      <button onClick={handleClickAge}> Increase age</button>
      <ChildComponent count={age} text="age" />

      <button onClick={handleClickSalary}> Increase salary</button>
    </Fragment>
  );
};

export default ParentComponent;
