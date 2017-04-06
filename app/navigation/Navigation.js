import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {Link} from 'react-router-dom';

export default class Navigation extends React.Component {

    render() {
        console.log(this.props);
        return (
            <ul className={css(styles.navigation)}>
                <li className={css(styles.navItem)}>
                    <Link className={css(styles.navLink)} to='/'>Home</Link>
                </li>
                <li className={css(styles.navItem)}>
                    <Link className={css(styles.navLink)} to='/share'>Share</Link>
                </li>
                <li className={css(styles.navItem)}>
                    <a
                        className={css(styles.addItem)}
                        onClick={() => {
                        this
                            .props
                            .onAddClick();
                    }}></a>
                </li>
                <li className={css(styles.navItem)}>
                    <Link className={css(styles.navLink)} to='/search'>Search</Link>
                </li>
                <li className={css(styles.navItem)}>
                    <Link className={css(styles.navLink)} to='/settings'>Settings</Link>
                </li>
            </ul>
        );
    }
}

const styles = StyleSheet.create({
    navigation: {
        display: "flex",
        flexWrap: "no-wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#028482",
        color: "white"
    },
    navItem: {
        listStyle: "none",
        color: "#fff"
    },
    navLink: {
        color: "#fff"
    },
    addItem: {
        marginBottom: "-10px",
        borderRadius: "50%",
        backgroundColor: "red",
        position: "relative",
        width: "50px",
        height: "50px",
        display: "block",
        cursor: "pointer",
        ":before": {
            content: "' '",
            position: "absolute",
            display: "block",
            "background-color": "#fff",
            height: "2px",
            "margin-top": "-2px",
            top: "50%",
            left: "8px",
            right: "8px"
        },
        ":after": {
            content: "' '",
            position: "absolute",
            display: "block",
            "background-color": "#fff",
            width: "2px",
            "margin-left": "-2px",
            left: "50%",
            top: "8px",
            bottom: "8px"
        },
        ":hover": {
            "background-color": "#990000"
        }
    }
});
