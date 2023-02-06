import React, { useState }from 'react';

const SearchBar = (props) => {
    const [searchInput, setSearchInput] = useState('');
    function handleSubmit(song) {
        song.preventDefault();
        props.searchMusic(searchInput)
    }
    
return ( 
    <form onSubmit= {handleSubmit}>
        <label>Search</label>
        <input type='text' value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
    </form>
    );
}


export default SearchBar;