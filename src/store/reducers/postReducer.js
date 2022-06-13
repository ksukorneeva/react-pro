import { v4 as uuidv4 } from 'uuid';

const ADD_POST = 'ADD_POST';
const REMOVE_POST = 'REMOVE_POST';
const EDIT_POST = 'EDIT_POST';

const initialState = [
    { id: '1', title: 'title 1' },
    { id: '2', title: 'title 2' },
    { id: '3', title: 'title 3' },
];

export function postReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            const newPost = { id: uuidv4(), title: action.payload };
            return [...state, newPost];
        case REMOVE_POST:
            return state.filter((post) => post.id !== action.payload);
        case EDIT_POST:
            const postEdit = state.find(
                (post) => post.id === action.payload.id
            );
            console.log(postEdit);
            return postEdit;
        default:
            return state;
    }
}

export const addPost = (title) => ({ type: ADD_POST, payload: title });
export const removePost = (id) => ({ type: REMOVE_POST, payload: id });
export const editPost = (obj) => ({ type: EDIT_POST, payload: obj });
