import {connect} from 'react-redux';
import React from 'react';
import ItemList from './ItemList';
import * as actionCreators from './ItemActionCreators';

const mapStateToProps = (state) => {

  const {categories, activeCategory, addingItem} = state;
  console.log(addingItem);
  return {items: categories[activeCategory].items, addingItem, activeCategory};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStartAddItem: () => {
      dispatch(actionCreators.startAddItem());
    },
    onAddItem: (name, catIndex) => {
      dispatch(actionCreators.addItem(name, catIndex));
    }
  };
};

const ItemListContainer = connect(mapStateToProps, mapDispatchToProps)(ItemList);

export default ItemListContainer;