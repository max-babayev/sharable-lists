import React from 'react';
import {StyleSheet, css} from 'aphrodite';

import Navigation from '../navigation/Navigation';
import AddItemModal from '../addItemModal/AddItemModal';
import ConfirmModal from '../confirmModal/ConfirmModal';
import CategoryItem from './CategoryItem';

export default class CategoryList extends React.Component {

    render() {
        const {
            categories = [],
            addingCategory,
            deletingCategory,
            onStartAddCategory,
            onStartDeleteCategory,
            onCancelDeleteCategory,
            onDeleteCategory,
            onAddCategory,
            onCancelAddCategory
        } = this.props;
        console.log(deletingCategory);
        return (
            <div className ={css(styles.listContainer)}>
                <Navigation onAddClick={onStartAddCategory}/>
                <ul className={css(styles.list)}>{categories.map((cat, index) => {
                        return <div key={index}><CategoryItem
                            onSideDrag={() => onStartDeleteCategory(index)}
                            listItem={cat}/></div>;
                    })}</ul>
                {addingCategory
                    ? <AddItemModal onAddClick={onAddCategory} onCancelClick={onCancelAddCategory}/>
                    : null}
                {deletingCategory !== false
                    ? <ConfirmModal onConfirmClick={onDeleteCategory} onCancelClick={onCancelDeleteCategory}/>
                    : null}
                <div
                    className={css(styles.emptyMessage, categories.length === 0 && styles.emptyMessageVisible)}>
                    Oops, looks like there are no lists here. Click the + button above to add a list
                    and get started!
                </div>

            </div>
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
        minHeight: "100vh",
        background: "grey"
    },
    list: {},
    emptyMessage: {
        color: 'white',
        display: "none"
    },
    emptyMessageVisible: {
        display: "block"
    }
});
