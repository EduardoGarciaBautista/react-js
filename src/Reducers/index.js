const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            return {
                ...state,
                myList: [...state.myList, action.payload]
            }
        case 'DELETE_FAVORITE':
            return {
                ...state,
                myList: state.myList.filter(({id}) => id !== action.payload)
            }
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        case 'REGISTER_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        case 'GET_VIDEO':
            return {
                playing:
                    state.myList.find(({id}) => id === Number(action.payload)) ||
                    state.trends.find(({id}) => id === Number(action.payload)) ||
                    state.originals.find(({id}) => id === Number(action.payload)) || []
            }
        default:
            return state;
    }
}

export default reducer;
