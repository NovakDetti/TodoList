import React, { useState } from 'react'

// style
import './category.creator.style.scss';

//service 
import { createCategory } from '../../service/dataservice';

// pop up message
import Swal from 'sweetalert2'

function CategoryCreator ({email}) {
    const [name, setName] = useState(false);
    let addNewCategory = () => {
        if (name) {
            createCategory(name, email)
        } else {
            Swal.fire("Type a name")
        }
    }

    return (
        <div className="create-category-form">
            <p>Add a category name:</p>
            <input type="text" placeholder="type here..." onChange={(e) => setName(e.target.value)}></input>
            <button onClick={addNewCategory}>Create</button>
        </div>
    )
}

export default CategoryCreator;