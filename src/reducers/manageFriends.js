

export function manageFriends(state = {friends: []}, action){
  let newFriend = action.friend

  switch (action.type) {
    case "ADD_FRIEND":
      return {...state, friends: [...state.friends, newFriend]}

      //destructure state

    case "REMOVE_FRIEND":
      return {...state, friends: state.friends.filter(function(friend)
        { return friend.id != action.id})}


    default:
        return state;
  }
}
