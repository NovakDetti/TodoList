const default_state = {
    email : ""
};

function actualState(state = default_state, action) {
    switch (action.type) {
        case "CURRENT_USER":
            return {
                ...state,
                email : action.payload.email
            };


        default:
            return state
    }
}

export default actualState;

