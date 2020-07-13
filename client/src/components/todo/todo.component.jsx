import React from 'react'

//style
import './todo.style.scss';

// service
import { deleteTodo } from '../../service/dataservice';

const TodoItem = ({details}) => {
    const importanceBar = { level: details.importance}

    return(
        <div className="todo-container">
            <div id="informations" className={details.letterhead}>
                <p>{details.category}</p>
                <p>{new Date(details.createdAt).toLocaleDateString()}</p>
            </div>
            <h4>
                {details.description}
                <span class="material-icons build">build</span>
                <span className="material-icons delete" onClick={() => deleteTodo(details.description)}>delete</span>
            </h4>
            <div className="importance-container">
                <p>Importance</p>
                <div className="importance-bar" style={{ width: importanceBar.level/2+"vw" }}>{`${importanceBar.level}%`}</div>
            </div>
        </div>
    )
}

export default TodoItem;