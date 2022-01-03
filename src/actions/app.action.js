export const INCREMENT = 'INCREMENT';

export const addIncrement = (value) => ({
    type: INCREMENT,
    payload: {
        value: ++value
    }
});