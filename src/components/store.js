import { noteData } from './firebaseConnect'


let redux = require('redux');
const noteInitialState = {
    editFormVisibility: false,
    addFormVisibility: false,
    editItem: {},
    deleteItemId: '',
    alertVisibility: false,
    alertContent: []
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case 'INSERT_DATA':
            noteData.push(action.newItem)
            return { ...state };
        case 'UPDATE_DATA':
            noteData.child(action.editItem.id).update({
                title: action.editItem.title,
                desc: action.editItem.desc
            })
            return { ...state, editFormVisibility: false, editItem: {} };
        case 'DELETE_DATA':
            noteData.child(action.id).remove();
            return { ...state, deleteItemId: '' };
        case 'HIDE_EDIT_FORM':
            return { ...state, editFormVisibility: false };
        case 'SHOW_EDIT_FORM':
            return { ...state, editFormVisibility: true, addFormVisibility: false };
        case 'SHOW_ADD_FORM':
            console.log("show add forms")
            return { ...state, addFormVisibility: true, editFormVisibility: false };
        case 'GET_EDIT_ITEM':
            return { ...state, editItem: action.editItem };
        case 'SHOW_ALERT':
            return { ...state, alertVisibility: true, alertContent: action.alertContent };
        case 'HIDE_ALERT':
            return { ...state, alertVisibility: false }
        default:
            return state;
    }
}
let store = redux.createStore(allReducer);
// store.subscribe(() => {
//     console.log(store.getState())
// })
export default store;