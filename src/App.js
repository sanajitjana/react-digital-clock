import React, { useState } from "react";

const App = () => {
  const time = new Date().toLocaleTimeString();
  const [count, setCount] = useState(time);

  const updateTime = () => {
    const currTime = new Date().toLocaleTimeString();
    setCount(currTime);
  };

  setInterval(updateTime, 1000);

  return (
    <>
      <h1 className="text-center mt-5">React - Digital Clock</h1>
      <div className="text-center" style={{ marginTop: "30vh" }}>
        <h1>{count}</h1>
      </div>
      <h6 className="text-center" style={{ marginTop: "40vh" }}>
        Copyright &copy; 2021 Sanajit Jana. All Rights Reserved.
      </h6>
    </>
  );
};

export default App;
