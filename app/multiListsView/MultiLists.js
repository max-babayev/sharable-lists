import React from 'react';
import {StyleSheet, css} from 'aphrodite';

import Navigation from '../navigation/Navigation';
import AddItemModal from '../addItemModal/AddItemModal';
import ConfirmModal from '../confirmModal/ConfirmModal';
import MultiListsItem from './MultiListsItem';
export default class MultiLists extends React.Component {

    render() {
        const {
            lists = [],
            addingList,
            deletingList,
            onStartAddList,
            onStartDeleteList,
            onCancelDeleteList,
            onDeleteList,
            onAddList,
            onCancelAddList
        } = this.props;

        return (
            <div className ={css(styles.listContainer)}>
                <Navigation onAddClick={onStartAddList}/>
                <ul className={css(styles.list)}>{lists.map((list, index) => {
                        return <div key={index}><MultiListsItem
                            sideDragRevertFlag={!deletingList}
                            onSideDrag={() => onStartDeleteList(index)}
                            listItem={list}/></div>;
                    })}</ul>
                {addingList
                    ? <AddItemModal onAddClick={onAddList} onCancelClick={onCancelAddList}/>
                    : null}
                {deletingList !== false
                    ? <ConfirmModal onConfirmClick={onDeleteList} onCancelClick={onCancelDeleteList}/>
                    : null}
                <div
                    className={css(styles.emptyMessage, lists.length === 0 && styles.emptyMessageVisible)}>
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
