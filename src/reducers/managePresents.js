export function managePresents(state = {numberOfPresents: 0}, action){
    switch (action.type) {
        case 'INCREASE':
            return state + 1
        default:
            return state  
    }
}
