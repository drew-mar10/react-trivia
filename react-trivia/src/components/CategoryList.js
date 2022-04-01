import React from "react"

const CategoryList = (props) => {
    const { categories, setSelectedCategory } = props
    return (
            
        <>
        <div className="catList">
            {categories.map(category => {
                return (
                        <div className="category" key={category.id}>
                            <p>{category.name}</p>
                            <button className='button' onClick={() => setSelectedCategory(category.id)}>select</button>
                        </div>
                )
            })}
        </div>
        </>
    )
}

export { CategoryList }