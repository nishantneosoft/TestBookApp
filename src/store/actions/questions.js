export const ADD_QUESTION = 'ADD_QUESTION';
export const LOCK_USER_CHOOSEN_OPTION = 'LOCK_USER_CHOOSEN_OPTION';

export const addQuestion = (id) => {
    return { type: ADD_QUESTION, payload : id }
}

export const lockUserChoosenOption = (option) => {
    return { type: LOCK_USER_CHOOSEN_OPTION, payload: option }
}
