const emptyState = {
        addingList: false,
        lists : []
};
function multiLists(state = emptyState, action) {
    switch (action.type) {
        case "ADD_LIST":
            return Object.assign({}, state, {
                lists : [
                {
                    name: action.name,
                    items: []
                },
                ...state.lists],
                addingList : false
            });
        case "START_ADD_LIST":
            return Object.assign({}, state, {
                addingList : true
            });
        case "CANCEL_ADD_LIST":
            return Object.assign({}, state, {
                addingList : false
            });
        default:
            return state;
    }
}

export default multiLists;