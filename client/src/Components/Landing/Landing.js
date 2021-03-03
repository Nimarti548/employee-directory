import React, { useState, useEffect } from 'react';
import API from "../../Utils/API";
import Jumbotron from "../Jumbotron/Jumbotron";
import SearchBar from "../SearchBar/SearchBar";
import Table from "../Table/Table"

const Landing = () => {
    const [emp, setEmp] = useState(null);

    useEffect(() => {
        API.empResults(emp)
        .then((res) => {
            return res.data;
        })
        .then((data) => setEmp(data.results))
    }, [])

    console.log(emp);
    return (
      <div className="landing">
        <Jumbotron />
        <SearchBar />
        {emp && <Table emp={emp} title="All Employees" />}
      </div>
    );
}

export default Landing
