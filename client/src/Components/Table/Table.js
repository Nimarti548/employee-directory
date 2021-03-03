import React from 'react'

const Table = ({emp}) => {
    return (
      <table className="emp-table">
        <thead>
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
           {emp.map((employee) => (
        <tbody className="emp-view" key={employee.uuid}>
          <tr>
            <td >
                <img src={employee.picture.thumbnail} alt="employee" />
            </td>
            <td>
                {employee.name.first} {employee.name.last}
            </td>
            <td>
                {employee.phone} 
            </td>
            <td>
                {employee.email} 
            </td>
            <td>
                {employee.dob.age} 
            </td>
          </tr>
        </tbody>
           ))}
      </table>
    );
}

export default Table
