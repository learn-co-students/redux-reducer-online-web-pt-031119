export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      state.friends.push(action.friend)
      return state
    case 'REMOVE_FRIEND':
      let friendsArray = []
      for(var i=0;i<state.friends.length;i++)
        if(state.friends[i].id != action.id){
          friendsArray.push(state.friends[i]);
        }
      return {friends: friendsArray}
    default:
      return state
  }
}
