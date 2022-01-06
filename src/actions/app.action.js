export const INCREMENT = 'INCREMENT';
export const LOAD_INCREMENT = 'LOAD_INCREMENT';

export const addIncrement = (value) => ({
    type: LOAD_INCREMENT,
    payload: value
});