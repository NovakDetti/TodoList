const default_state = {
    categoryList : [],
    actualCategory: "",
    actualTodo: "",
};

function actualState(state = default_state, action) {
    switch (action.type) {
        case "UPDATE_CATEGORY":
            return {
                ...state,
                actualCategory : action.payload.name
            };


        default:
            return state
    }
}

export default actualState;

