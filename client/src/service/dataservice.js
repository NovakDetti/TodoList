// Category services

// CREATE 
function createCategory(name){
    const response = fetch("http://localhost:8000/category/create", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"name" : name})
    })
    return response;
}

// READ
function fetchCategories() {
    const response = fetch("http://localhost:8000/category/all", {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return response;
};

//DELETE

function deleteCategory(name) {
    const response = fetch("http://localhost:8000/category/delete", {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "name": name })
    })
    return response;
};

// Todo services

// CREATE
function createTodo(description, category, importance, letterhead) {
    const response = fetch("http://localhost:8000/todo/create", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
             "description": description, 
             "letterhead" : letterhead,
             "importance" : importance,
             "category": category,
             })
    })
    return response;
}

function todayTodos(category) {
    const response = fetch("http://localhost:8000/todo/today", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "category": category })
    })
    return response;
};

function monthTodos(category) {
    const response = fetch("http://localhost:8000/todo/month", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "category": category })
    })
    return response;
};

// READ
function fetchTodos(category) {
    const response = fetch("http://localhost:8000/todo/all", {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "category": category })
        })
        return response;
};

//DELETE

function deleteTodo(description) {
    const response = fetch("http://localhost:8000/todo/delete", {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "description": description })
    })
    return response;
};



export { createCategory, createTodo, fetchTodos, deleteTodo, deleteCategory, todayTodos, monthTodos, fetchCategories}