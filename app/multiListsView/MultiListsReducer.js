const emptyState = {
    addingList: false,
    deletingList: false,
    lists: []
};
function multiLists(state = emptyState, action) {
    switch (action.type) {
        case "ADD_LIST":
            return Object.assign({}, state, {
                lists: [
                    {
                        name: action.name,
                        items: []
                    },
                    ...state.lists
                ],
                addingList: false
            });
        case "START_ADD_LIST":
            return Object.assign({}, state, {addingList: true});
        case "CANCEL_ADD_LIST":
            return Object.assign({}, state, {addingList: false});
        case "START_DELETE_LIST":
            {
                return Object.assign({}, state, {deletingList: action.index});
            }
        case "DELETE_LIST":
            console.log(state.lists);
            return Object.assign({}, state, {
                lists: [
                    ...state
                        .lists
                        .slice(0, state.deletingList),
                    ...state
                        .lists
                        .slice(state.deletingList + 1)
                ],
                deletingList: false
            });
        case "CANCEL_DELETE_LIST":
            return Object.assign({}, state, {deletingList: false});
        default:
            return state;
    }
}

export default multiLists;