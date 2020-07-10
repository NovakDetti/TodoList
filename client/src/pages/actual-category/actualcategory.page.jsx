import React, { useState , useEffect} from 'react'
import {Link} from 'react-router-dom';

//style
import './actualcategory.style.scss';

//components
import TodoItem from '../../components/todo/todo.component';

//redux
import { connect } from "react-redux";

// service
import { createTodo, fetchTodos, todayTodos, monthTodos } from '../../service/dataservice';

// pop up message
import Swal from 'sweetalert2'


function ActualCategory(){
    let[isActive, setActive] = useState(false);
    const[todoList, setTodoList] = useState();
    let[description, setDescription] = useState("")
    let[letterhead, setLetterhead] = useState("")
    let[importance, setImportance] = useState(0)
    const category = window.location.pathname.split('/')[2];

    useEffect(() => {
        fetchTodos(category)
        .then(res => res.json())
        .then(data => setTodoList(data))
    }, [todoList])

    let createAndUpdate = () => {
        createTodo(description, category, importance, letterhead);
        setActive(false);
        fetchTodos(category)
            .then(res => res.json())
            .then(data => setTodoList(data))
        Swal.fire("Todo created")
    }

    let changeTodayTodos = () => {
        todayTodos(category)
            .then(res => res.json())
            .then(data => setTodoList(data));
    }
    
    let changeTodayMonth = () => {
        monthTodos(category)
            .then(res => res.json())
            .then(data => setTodoList(data));
    }

    return(
        <div className="main-container">
            <Link to="/categories"><p id="go-back"><span class="material-icons">keyboard_backspace</span>Go back</p></Link>
            <div className="category-details-container">
                <div id="letterhead">
                    <h3>{category}</h3>
                    <button onClick={() => setActive(!isActive)}><span className="material-icons">add</span>Create todo</button>
                </div>
                <div id="calendar-buttons-container">
                    <p>Filter to:</p>
                    <button className="today-button" onClick={changeTodayTodos}><span className="material-icons">calendar_today</span>Today</button>
                    <button className="today-button" onClick={changeTodayMonth}><span className="material-icons">calendar_today</span>Month</button>
                </div>
                <div className="todo-layer">
                    {
                        todoList && todoList.map(todo => <TodoItem key={Math.random()} details={todo} />)
                    }
                </div>
                    <div>
                        {
                            isActive &&
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
                        }
                    </div>
            </div>
        </div>
    )
    
}

function mapStateToProps(store) {
    return {
        categories: store.default.actualCategory
    }
}

export default connect(mapStateToProps)(ActualCategory);