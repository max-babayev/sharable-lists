import React from 'react';
import {StyleSheet, css} from 'aphrodite';

import Navigation from '../navigation/Navigation';
import AddItemModal from '../addItemModal/AddItemModal';
import ConfirmModal from '../confirmModal/ConfirmModal';
import Item from './Item';

export default class ItemList extends React.Component {

    render() {
        const {

            activeCategory
        } = this.props;

        return (
            <div className ={css(styles.listContainer)}>
                <Navigation onAddClick={onStartAddItem}/>
                <ul className={css(styles.list)}>{items.map((item, index) => {
                        return <div key={index}><Item listItem={item}/></div>;
                    })}</ul>
                <div
                    className={css(styles.emptyMessage, items.length === 0 && styles.emptyMessageVisible)}>
                    Oops, looks like there are no items here. Click the + button above to add an
                    item and get started!
                </div>

                {addingItem
                    ? <AddItemModal
                            onAddClick={(name) => onAddItem(name, activeCategory)}
                            onCancelClick={onCancelAddItem}/>
                    : null}

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
