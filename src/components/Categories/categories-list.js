import React from 'react'

export default ({ categories, onCategoryClick }) => {
    
    return (
        <ul className='list-unstyled'>
            {categories.map(category => {
                return (
                    <li key={category}>
                        <a href='' onClick={(event) => {
                            event.preventDefault()
                            onCategoryClick(category)
                        }}>{category}</a>
                    </li>
                )
            })}
        </ul>
    )
}