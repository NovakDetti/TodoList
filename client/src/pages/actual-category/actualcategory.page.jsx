import React, { useState , useEffect} from 'react'
import {Link} from 'react-router-dom';

//style
import './actualcategory.style.scss';

//components
import TodoItem from '../../components/todo/todo.component';
import TodoCreator from '../../components/todo-creator/todo.creator.component';

//redux
import { connect } from "react-redux";

// service
import { fetchTodos, todayTodos, monthTodos } from '../../service/dataservice';


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
    }, [todoList, category])

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
                            <TodoCreator />
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