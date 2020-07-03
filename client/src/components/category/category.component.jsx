import React from 'react'
import { Link } from 'react-router-dom';

// service
import { deleteCategory } from '../../service/dataservice';

//style
import './category.style.scss';

const Category = ({ category }) => {
    return (
        <div className="category-container">
            <div id="category-menu">
                <h5>{category.name}</h5>
                <div>
                    <Link to={`/view/${category.name}`}>
                        <span className="material-icons" >launch</span>
                    </Link>
                    <span className="material-icons delete" onClick={() => deleteCategory(category.name)}>delete</span>
                </div>
            </div>
        </div>
    )
}



export default Category;