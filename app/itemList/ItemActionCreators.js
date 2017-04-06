import itemActions from '../itemList/ItemActions';

export const addItem = (name, categoryIndex) => {
    return {type: itemActions.ADD_ITEM, name, categoryIndex};
};

export const startAddItem = () => {
    return {type: itemActions.START_ADD_ITEM};
};
