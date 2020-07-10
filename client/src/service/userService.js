function loginUser(user) {
    const response = fetch("http://localhost:8000/users/login", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "user": user })
    })
    return response;
};

function signUpUser(user) {
    const response = fetch("http://localhost:8000/users/signup", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "user": user })
    })
    return response;
};


function logOut(email, token) {
    const response = fetch("http://localhost:8000/users/logout", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "email": email, "token": token })
    })
    return response;
};

export { loginUser, signUpUser, logOut}