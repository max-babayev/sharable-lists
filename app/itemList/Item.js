import React from 'react';
import ReactDOM from 'react-dom';
import {StyleSheet, css} from 'aphrodite';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
    }

 
    render() {
        const {index, listItem, onSideDrag, sideDragRevertFlag} = this.props;

        return (
            <li
                ref="listItem"
                className={css("listItem", styles.listItem)}>
                <a className={css(styles.item)}><img src="/app/assets/images/moveArrow.svg"/></a>
                <span className={css(styles.item)}>{listItem.name}</span>
                <a
                    className={css(styles.item, styles.share)}
                    onClick=
                    {() => onShareClick(index)}>Share</a>
            </li>
        );
    }
}

const styles = StyleSheet.create({
    listItem: {
        fontSize: "36px",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
        listStyle: "none",
        width: "90vw",
        height: "100px",
        willChange: "transform",
        marginBottom: "20px"
    },
    item: {
        display: "flex",
        margin: "auto"
    },
    share: {
        fontSize: "20px"
    }
});