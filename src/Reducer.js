export const reducer = (state, action) => {
    if(action.type === "ADD USER"){
        return {...state, user: action.payload};
    }
    return state;
}