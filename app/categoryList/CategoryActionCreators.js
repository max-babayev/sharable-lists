import actions from './CategoryActions';

export const addCategory = (name) => {
    return {type: actions.ADD_CATEGORY, name};
};

export const startAddCategory = () => {
    return {type: actions.START_ADD_CATEGORY};
};

export const cancelAddCategory = () => {
    return {type: actions.CANCEL_ADD_CATEGORY};
};

export const startDeleteCategory = (index) => {
    return {type: actions.START_DELETE_CATEGORY, index};
};

export const deleteCategory = (index) => {
    return {type: actions.DELETE_CATEGORY, index};
};

export const cancelDeleteCategory = () => {
    return {type: actions.CANCEL_DELETE_CATEGORY};
};

export const setActiveCategory = (index) => {
    return {type: actions.SET_ACTIVE_CATEGORY, index};
};