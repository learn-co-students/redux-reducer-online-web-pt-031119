export function manageFriends(state = {friends: []}, action){
    let newFriend = action.friend
    switch(action.type){
        case "ADD_FRIEND":
            return {
            friends: [
                ...state.friends, action.friend
            ]
            } 
        case "REMOVE_FRIEND":
            let newArray = []
            state.friends.map(f => {
                if (f.id !== action.id){
        
                 newArray.push(f)
                }
            })
            return {friends: newArray}
        
        default:
            return state
    }
}
