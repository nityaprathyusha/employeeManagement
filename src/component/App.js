import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LoginPage from "./LoginPage";
import EmployeeList from "./EmployeeList";

import "./app.css";

function App(props){
  
    return(
        <div>
           <h2 className="header">Employee Management</h2>
           <BrowserRouter>
                <Route path ="/" exact component = {LoginPage}/>
                <Route path = "/employeeList" exact component= {EmployeeList}/>
           </BrowserRouter>
        </div>
    )
}
export default App;