import React from 'react'


function SearchTodo() {
    return (
        <div className="container-search">
            <input placeholder="Buscar..." className="search" />
            <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" className="searchIcon" />
        </div>
    )
}

export { SearchTodo }
