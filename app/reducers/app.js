import categories from "./categories";
import categoryActions from '../categoryList/CategoryActions';
import itemActions from '../itemList/ItemActions';

const emptyState = {
    categories: [],
    addingCategory: false,
    deletingCategory: false
};
function app(state = emptyState, action) {
    switch (action.type) {
        case categoryActions.ADD_CATEGORY:
        case itemActions.ADD_ITEM:
            return {
                ...state,
                categories: categories(state.categories, action),
                addingCategory: false,
                addingItem: false
            };
        case categoryActions.START_ADD_CATEGORY:
            return {
                ...state,
                addingCategory: true
            };
        case categoryActions.CANCEL_ADD_CATEGORY:
            return {
                ...state,
                addingCategory: false
            };
        case categoryActions.START_DELETE_CATEGORY:
            return {
                ...state,
                deletingCategory: action.index
            };
        case categoryActions.DELETE_CATEGORY:
            return {
                ...state,
                categories: categories(state.categories, action),
                deletingCategory: false
            };
        case categoryActions.CANCEL_DELETE_CATEGORY:
            return {
                ...state,
                deletingCategory: false
            };

        case categoryActions.SET_ACTIVE_CATEGORY:
            return {
                ...state,
                activeCategory: action.index
            };

        case itemActions.START_ADD_ITEM:
            return {
                ...state,
                addingItem: true
            };
        default:
            return state;
    }
}

export default app;