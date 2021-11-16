import React from 'react'


function SearchTodo({ searchValue, setSearchValue }) {
    //HOKS param

    const onsearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }
    return ([
        <div className="container-search">
            <input placeholder="Buscar..." className="search"
                onChange={onsearchValueChange}
                value={searchValue}
            />
            <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" className="searchIcon" />
        </div>,
        <p>
            {searchValue}
        </p>
    ])
}

export { SearchTodo }
