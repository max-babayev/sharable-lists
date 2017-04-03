import {connect} from 'react-redux';
import React from 'react';
import CategoryList from './CategoryList';
import * as actionCreators from './CategoryActionCreators';

const mapStateToProps = (state) => {
  const {categories, addingCategory, deletingCategory} = state.app;
  return {categories, addingCategory, deletingCategory};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStartAddCategory: () => {
      dispatch(actionCreators.startAddCategory());
    },
    onAddCategory: (name) => {
      dispatch(actionCreators.addCategory(name));
    },
    oncancelDeleteCategory: (name) => {
      dispatch(actionCreators.cancelAddCategory());
    },
    onStartDeleteCategory: (index) => {
      dispatch(actionCreators.startDeleteCategory(index));
    },
    onCancelDeleteCategory: () => {
      dispatch(actionCreators.cancelDeleteCategory());
    },
    onDeleteCategory: (index) => {
      dispatch(actionCreators.deleteCategory(index));
    }
  };
};

const CategoryListContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryList);

export default CategoryListContainer;