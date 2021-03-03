import React, { useState, useEffect } from 'react';
import API from "../../Utils/API";
import Jumbotron from "../Jumbotron/Jumbotron";
import SearchBar from "../SearchBar/SearchBar";
import Table from "../Table/Table"

const Landing = () => {
    const [emp, setEmp] = useState(null);
    const [filteredEmp, setFilteredEmp] = useState([]);



    useEffect((emp) => {
        API.empResults(emp)
        .then((res) => {
            return res.data;
        })
        .then((data) => { 
          console.log(data);
          const employees = data.results.map((employee) => {
            return {
              id: employee.login.uuid,
              img: employee.picture.thumbnail,
              name: `${employee.name.first} ${employee.name.last}`,
              phone: employee.phone,
              email: `${employee.email}`,
              dob: employee.dob.age,
            };
          })
          setEmp(employees);
          setFilteredEmp(employees);
        })

    }, [])

    

    return (
      <div className="landing">
        <Jumbotron />
        <SearchBar />
        <Table employees={filteredEmp} title="All Employees" />
      </div>
    );
}

export default Landing
