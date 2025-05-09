import React, { useState } from 'react';

const SearchAndFilter = ({ doctors, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('name');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterDoctors(value, sortOption);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    filterDoctors(searchTerm, value);
  };

  const filterDoctors = (term, sort) => {
    let filtered = [...doctors];
   
    // Filter by search term
    if (term) {
      filtered = filtered.filter(doctor =>
        doctor.name.toLowerCase().includes(term.toLowerCase())
      );
    }
   
    // Sort according to selected option
    if (sort === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'availability') {
      filtered.sort((a, b) => a.available.localeCompare(b.available));
    }
   
    onFilterChange(filtered);
  };

  return (
    <div className="search-filter">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search doctors by name..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="filter-box">
        <select value={sortOption} onChange={handleSortChange}>
          <option value="name">Sort by Name</option>
          <option value="availability">Sort by Availability</option>
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilter;