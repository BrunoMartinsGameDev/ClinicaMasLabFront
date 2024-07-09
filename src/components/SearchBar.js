import React, { useState } from 'react';
 
const especialidades = [
  'Cardiologista', 'Dermatologista', 'Endocrinologista', 'Ginecologista', 
  'Neurologista', 'Oftalmologista', 'Ortopedista', 'Pediatra', 
  'Psiquiatra', 'Urologista', 'Oncologista', 'Gastroenterologista',
  'Otorrinolaringologista', 'Nefrologista', 'Reumatologista', 'Hematologista',
  'Pneumologista', 'Infectologista', 'Nutrólogo', 'Radiologista'
];
 
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
 
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSuggestions(
      value ? especialidades.filter(e => e.toLowerCase().includes(value.toLowerCase())) : []
    );
  };
 
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
    onSearch(suggestion);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };
 
  return (
<div className="search-bar">
<form onSubmit={handleSubmit}>
<input
          type="text"
          placeholder="O que você procura?"
          value={query}
          onChange={handleChange}
        />
<button type="submit">🔍</button>
</form>
      {suggestions.length > 0 && (
<ul className="suggestions">
          {suggestions.map((s, index) => (
<li key={index} onClick={() => handleSuggestionClick(s)}>
              {s}
</li>
          ))}
</ul>
      )}
</div>
  );
};
 
export default SearchBar;