import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => ( //placeholder gets passed in as a prop
    // handleChange is another prop that gets passed in as a function
    
    <input
        className='search'
        type='search'
        placeholder={placeholder} // we want placeholder to be a prop that gets passed in
        onChange={handleChange} // {handleChange} AKA {e => this.setState({searchField: e.target.value})}

    />

)