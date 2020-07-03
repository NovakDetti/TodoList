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

function createTodo(description, category, importance, letterhead) {
    console.log(letterhead)
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



export { createCategory, createTodo, fetchTodos, deleteTodo, deleteCategory, todayTodos, monthTodos, fetchCategories}