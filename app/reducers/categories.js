import categoryActions from '../categoryList/CategoryActions';
import itemActions from '../itemList/ItemActions';
import items from "./items";

function categories(state = [], action) {
    switch (action.type) {
        case categoryActions.ADD_CATEGORY:
            return [
                {
                    name: action.name,
                    items: [],
                    shared: []
                },
                ...state
            ];

        case categoryActions.DELETE_CATEGORY:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        case itemActions.ADD_ITEM:
            return [
                ...state.slice(0, action.categoryIndex - 1), {
                    ...state[action.categoryIndex],
                    items: items(state[action.categoryIndex].items, action)
                },
                ...state.slice(action.categoryIndex + 1)
            ];

        default:
            return state;
    }
}

export default categories;