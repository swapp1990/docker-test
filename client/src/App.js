import React, { Component, useEffect } from "react";
import TestDataService from "./services/test.service";

function App() {
  useEffect(() => {
    TestDataService.getAll()
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });

    TestDataService.login()
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return <div>Hello Api</div>;
}

export default App;
