import itemActions from '../itemList/ItemActions';

function categories(state = [], action) {
    console.log(state);
    switch (action.type) {
        case itemActions.ADD_ITEM:
            return [
                {
                    name: action.name,
                    completed: false
                },
                ...state
            ];

        default:
            return state;
    }
}

export default categories;