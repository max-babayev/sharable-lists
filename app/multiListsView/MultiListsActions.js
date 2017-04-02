export const addList = (name) => {
    return {type: "ADD_LIST", name};
};

export const startAddList = () => {
    return {type: "START_ADD_LIST"};
};

export const cancelAddList = () => {
    return {type: "CANCEL_ADD_LIST"};
};

export const startDeleteList = (index) => {
    return {type: "START_DELETE_LIST", index};
};

export const deleteList = (index) => {
    return {type: "DELETE_LIST", index};
};

export const cancelDeleteList = () => {
    return {type: "CANCEL_DELETE_LIST"};
};