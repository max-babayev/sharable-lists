export const addItem = (name) => {
    return {type: "ADD_ITEM", name};
};

export const startAddItem = () => {
    return {type: "START_ADD_ITEM"};
};
