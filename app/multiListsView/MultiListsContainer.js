import {connect} from 'react-redux';
import React from 'react';
import MultiList from './MultiLists';
import * as actionCreators from './MultiListsActions';

const mapStateToProps = (state) => {
  console.log(state);
  const {lists, addingList, deletingList} = state.allLists;
  return {lists, addingList, deletingList};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStartAddList: () => {
      dispatch(actionCreators.startAddList());
    },
    onAddList: (name) => {
      dispatch(actionCreators.addList(name));
    },
    onCancelAddList: (name) => {
      dispatch(actionCreators.cancelAddList());
    },
    onStartDeleteList: (index) => {
      dispatch(actionCreators.startDeleteList(index));
    },
    onCancelDeleteList: () => {
      dispatch(actionCreators.cancelDeleteList());
    },
    onDeleteList: (index) => {
      dispatch(actionCreators.deleteList(index));
    }
  };
};

const MultiListsContainer = connect(mapStateToProps, mapDispatchToProps)(MultiList);

export default MultiListsContainer;