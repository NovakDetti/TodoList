import React , {useState} from 'react';

//style
import './todo.creator.style.scss';

// pop up message
import Swal from 'sweetalert2'

// service
import { createTodo } from '../../service/dataservice';

function TodoCreator () {
    let [description, setDescription] = useState("")
    let [letterhead, setLetterhead] = useState("")
    let [importance, setImportance] = useState(0)
    const category = window.location.pathname.split('/')[2];

    let createAndUpdate = () => {
        createTodo(description, category, importance, letterhead);
        Swal.fire("Todo created")
    }

    return (
        <div className="todo-creator-container">
            <h4>Details</h4>
            <p>Description:</p>
            <input type="text" placeholder="type here..." onChange={(e) => setDescription(e.target.value)}></input>
            <p>Letterhead:</p>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Types</button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div class="dropdown-item letterhead-design" id="type_1" onClick={() => setLetterhead("type_1")}></div>
                    <div class="dropdown-item letterhead-design" id="type_2" onClick={() => setLetterhead("type_2")}></div>
                    <div class="dropdown-item letterhead-design" id="type_3" onClick={() => setLetterhead("type_3")}></div>
                </div>
            </div>
            <p>Importance</p>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Choose a number</button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div class="dropdown-item imp-div" onClick={(e) => setImportance(e.currentTarget.textContent)}>10</div>
                    <div class="dropdown-item imp-div" onClick={(e) => setImportance(e.currentTarget.textContent)}>20</div>
                    <div class="dropdown-item imp-div" onClick={(e) => setImportance(e.currentTarget.textContent)}>30</div>
                    <div class="dropdown-item imp-div" onClick={(e) => setImportance(e.currentTarget.textContent)}>40</div>
                    <div class="dropdown-item imp-div" onClick={(e) => setImportance(e.currentTarget.textContent)}>50</div>
                    <div class="dropdown-item imp-div" onClick={(e) => setImportance(e.currentTarget.textContent)}>60</div>
                    <div class="dropdown-item imp-div" onClick={(e) => setImportance(e.currentTarget.textContent)}>70</div>
                    <div class="dropdown-item imp-div" onClick={(e) => setImportance(e.currentTarget.textContent)}>80</div>
                    <div class="dropdown-item imp-div" onClick={(e) => setImportance(e.currentTarget.textContent)}>90</div>
                    <div class="dropdown-item imp-div" onClick={(e) => setImportance(e.currentTarget.textContent)}>100</div>
                </div>
            </div>
            <button className="create-todo-button" onClick={createAndUpdate}>Create</button>
        </div>
    )
}

export default TodoCreator;