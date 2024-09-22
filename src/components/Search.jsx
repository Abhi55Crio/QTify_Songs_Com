import React from 'react'

const Search = () => {
  return (
    <form className='search-box'>
      <input type="text" placeholder='Search an album of your choice' className='search-box__input' />
      <button type='submit' className='search-box__button pointer'>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  )
}

export default Search
