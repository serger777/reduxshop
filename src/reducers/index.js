const initialState = {
    books:[]
};
const reducer = (state=initialState, action)=>{
    console.log(state);
    console.log(action.type);
    console.log(action.payload);
    switch(action.type){
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            };
        default:
            return state;
    }

};

export default reducer;
