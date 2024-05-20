import React from 'react'
import SearchBar from '../components/SearchBar'

const SearchLayout = ({search,handleSearch,handleClick,btnLabel,handleSortClick}) => {
  return (
    <div className='search-layout-wrapper'>
        <SearchBar heading='Customers' handleSortClick={handleSortClick} handleClick={handleClick} btnLabel={btnLabel} value={search} handleChange={handleSearch}/>
    </div>
  )
}

export default SearchLayout