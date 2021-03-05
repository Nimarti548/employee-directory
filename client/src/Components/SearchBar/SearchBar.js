import React from 'react'

const SearchBar = ({handleFilter}) => {
  
    return (
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Search Employees"
            onChange={handleFilter}
          />
        </div>
      </form>
    );
}

export default SearchBar
