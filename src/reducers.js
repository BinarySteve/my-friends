import {
    CHANGE_SEARCH_FIELD,
    REQUEST_FRIENDS_PENDING,
    REQUEST_FRIENDS_SUCCESS,
    REQUEST_FRIENDS_FAILED
} from './constants'
const initialState = {
    searchField: ''
}

export const searchFriends = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload })

        default:
            return state;
    }
}
const initialStateFriends = {
    isPending: false,
    friends: [],
    error: ''
}

export const friendsRequest = (state = initialStateFriends, action = {}) => {
    switch (action.type) {
        case REQUEST_FRIENDS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_FRIENDS_SUCCESS:
            return Object.assign({}, state, { friends: action.payload, isPending: false })
        case REQUEST_FRIENDS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            return state;
    }
}