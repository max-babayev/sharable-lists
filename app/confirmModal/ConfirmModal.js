import React from 'react';
import {StyleSheet, css} from 'aphrodite';

import Navigation from '../navigation/Navigation';

export default class MultiLists extends React.Component {

    render() {
        const {onConfirmClick, onCancelClick} = this.props;

        return (
            <div>
                <div className={css(styles.popupOverlay)}></div>
                <div className={css(styles.popup)}>
                    <h2>Are you sure?</h2>
                    <div className={css(styles.buttonContainer)}>
                    <button className={css(styles.button)} onClick={() => onConfirmClick()}>Yes</button>
                    <button className={css(styles.button)} onClick={() => onCancelClick()}>No</button>
                    </div>
                </div>
            </div>
        );
    }

}

const styles = StyleSheet.create({
    popupOverlay: {
        width: "100vw",
        height: "100vh",
        position: "fixed",
        zIndex: "100",
        background: "black",
        opacity: "0.8",
        top: 0,
        left: 0
    },
    popup: {
        width: "80vw",
        background: "white",
        border: "1px solid grey",
        position: "absolute",
        top: "30vh",
        left: "10vw",
        zIndex : "101"
    },
    popupInput: {
        display: "flex",
        width: "90%",
        margin: "auto"
    },
    buttonContainer: {
        display:"flex",
        justifyContent : "flex-end"
    },
    button: {
        margin :"5px"
        
    }
});