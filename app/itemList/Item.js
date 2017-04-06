import React from 'react';
import ReactDOM from 'react-dom';
import {StyleSheet, css} from 'aphrodite';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {index, listItem} = this.props;

        return (
            <li ref="listItem" className={css("listItem", styles.listItem)}>
                <input className={css(styles.checkbox)} type="checkbox"></input>
                <span className={css(styles.item)}>{listItem.name}</span>

            </li>
        );
    }
}

const styles = StyleSheet.create({
    checkbox: {
        width: "50px",
        height: "100%"
    },
    listItem: {
        fontSize: "20px",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
        listStyle: "none",
        width: "90vw",
        height: "30px",
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