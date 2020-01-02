export function managePresents(state = {numberOfPresents: 10}, action){
    switch (action.type){
        case "INCREASE":
            return {numberOfPresents: state.numberOfPresents + 1}
        default:
            return state;
    }
}
