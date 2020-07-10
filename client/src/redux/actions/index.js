export function fetchCategoriesX() {
    return async function (dispatch) {
        return fetch("http://localhost:8000/category/all", {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then( data  => data.json())
    };
}

export function current_user(email) {
    return {
        type: "CURRENT_USER",
        payload: {
            email: email
        }
    }
}