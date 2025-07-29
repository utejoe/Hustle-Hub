import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm, selectedSchool, setSelectedSchool }) => {
  const schools = [
    'All Schools',
    'UNILAG',
    'UI',
    'UNIBEN',
    'OAU',
    'Covenant',
    'Babcock',
    // Add more as needed
  ];

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search by service, name, or keyword..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={selectedSchool}
        onChange={(e) => setSelectedSchool(e.target.value)}
        className="school-select"
      >
        {schools.map((school) => (
          <option key={school} value={school}>
            {school}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
