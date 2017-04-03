import React from 'react';
import {StyleSheet, css} from 'aphrodite';

import Navigation from '../navigation/Navigation';

export default class AddItemModal extends React.Component {

    render() {
        const {onAddClick, onCancelClick} = this.props;

        return (
            <div>
                <div className={css(styles.popupOverlay)}></div>
                <div className={css(styles.popup)}>
                    <h2>Add a list category here:</h2>
                    <input
                        className={css(styles.popupInput)}
                        type="text"
                        ref={node => {
                        this.input = node;
                    }}></input>
                    <div className={css(styles.buttonContainer)}>
                    <button className={css(styles.button)} onClick={() => onAddClick(this.input.value)}>Add</button>
                    <button className={css(styles.button)} onClick={() => onCancelClick()}>Cancel</button>
                    </div>
                </div>
            </div>
        );
    }

}

const styles = StyleSheet.create({
    popupOverlay: {
        "width": "100vw",
        "height": "100vh",
        "position": "fixed",
        "z-index": "100",
        "background": "black",
        "opacity": "0.5"
    },
    popup: {
        width: "80vw",
        background: "white",
        border: "1px solid grey",
        position: "absolute",
        top: "30vh",
        left: "10vw",
        "z-index" : "101"
    },
    popupInput: {
        display: "flex",
        width: "90%",
        margin: "auto"
    },
    buttonContainer: {
        display:"flex",
        "justify-content" : "flex-end"
    },
    button: {
        "margin" :"5px"
        
    }
});