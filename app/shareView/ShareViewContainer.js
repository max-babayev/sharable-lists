import {connect} from 'react-redux';
import React from 'react';
import ItemList from './ItemList';
import * as actionCreators from './ShareActionCreators';

const mapStateToProps = (state) => {
  const {categories} = state;
  return {categories};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShareCategory: (catIndex, shareArray) => {
      dispatch(actionCreators.setShareStatus(catIndex, shareArray));
    }
  };
};

const ItemListContainer = connect(mapStateToProps, mapDispatchToProps)(ItemList);

export default ItemListContainer;