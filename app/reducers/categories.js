import categoryActions from '../categoryList/CategoryActions';

const emptyState = {
    addingCategory: false,
    deletingCategory: false,
    categories: []
};
function app(state = emptyState, action) {
    switch (action.type) {
        case categoryActions.ADD_CATEGORY:
            return {
                ...state,
                categories: [
                    {
                        name: action.name,
                        items: []
                    },
                    ...state.categories
                ],
                addingCategory: false
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
            {
                return {
                    ...state,
                    deletingCategory: action.index
                };
            }
        case categoryActions.DELETE_CATEGORY:
            return {
                ...state,
                categories: [
                    ...state
                        .categories
                        .slice(0, state.deletingCategory),
                    ...state
                        .categories
                        .slice(state.deletingCategory + 1)
                ],
                deletingCategory: false
            };
        case categoryActions.CANCEL_DELETE_CATEGORY:
            return {
                ...state,
                deletingCategory: false
            };
        
        default:
            return state;
    }
}

export default app;