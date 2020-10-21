import React from 'react';
import './search-box.components.css'

export const SearchBox = ({placeholder, handleChange}) => (

<input 
className='search' 
type='search' 
placeholder={placeholder}
onChange={handleChange} 
/>)