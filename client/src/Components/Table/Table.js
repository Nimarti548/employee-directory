import React from 'react'

const Table = ({employees, sortEmp}) => {
    return (
      <table className="emp-table">
        <thead>
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">  Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody className="emp-view">
        {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <img src={employee.img} alt="employee" />
              </td>
              <td>
                {employee.name} 
              </td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{employee.dob}</td>
            </tr>
        ))}
        </tbody>
      </table>
    );
}

export default Table
