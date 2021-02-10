import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchUser } from "../redux/action/userAction";

import "./app.css";

function EmployeeList({fetchUser, user}){

  const [usersList, setUsersList] = useState([]);

  useEffect( ()  => {
    fetchUser();   
  },[]);

  useEffect(() => {
      user ? setUsersList(user) : setUsersList([]);
      
  },[user]);

    return(
        <div  className ="ui raised very padded text container employeeWrapper">
          <h3 className =" ui header">Employee Dashbord</h3>
             <table className = "ui celled table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Age</th>
                      </tr>  
                   </thead>
                   <tbody>
                   {usersList.map((user) => {
                    return (
                        <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>{user.age}</td>
                        </tr>
                    )
                })}
                   </tbody>
                </table> 
        </div>
    )
}
const mapStateToProps = (state) => {
  console.log(state);
    return {
        user: state.user.userData
    }
}
const mapDispatchToProps = (dispatch) => {
  return  bindActionCreators({fetchUser}, dispatch)
} 
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList)