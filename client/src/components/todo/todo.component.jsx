import React from 'react'

//style
import './todo.style.scss';

// service
import { deleteTodo } from '../../service/dataservice';

const TodoItem = ({details}) => {
    return(
        <div className="todo-container">
            <div id="informations" className={details.letterhead}>
                <p>{details.category}</p>
                <p>{new Date(details.createdAt).toLocaleDateString()}</p>
            </div>
            <h4>
                {details.description}
                <span className="material-icons delete" onClick={() => deleteTodo(details.description)}>delete</span>
            </h4>
            <p>Importance : {details.importance} %</p>
            <p>{details.status}</p>
        </div>
    )
}

export default TodoItem;