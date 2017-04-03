import React from 'react';
import ReactDOM from 'react-dom';
import {StyleSheet, css} from 'aphrodite';
import interact from "interactjs";
import {Link} from 'react-router-dom';

export default class CategoryItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            duration: 0,
            startTrigger: 10,
            endTrigger: 300
        };
    }
    deleteItem() {
        this
            .props
            .onSideDrag(this.props.index);
    }

    dragMoveListener(event) {
        this.setState({
            x: this.state.x + event.dx,
            /* y: this.state.y + event.dy*/
        });
    }

    dragEndListener(event) {
        if (Math.abs(this.state.x) >= this.state.endTrigger) {
            this.deleteItem();
        }
        this.revertDrag();
    }

    revertDrag() {
        this.setState({
            x: 0,
            /*y: 0,*/
            duration: "0.50s"
        });
    }

    dragStartListener(event) {
        this.setState({duration: 0});
    }

    setTransform() {
        return StyleSheet.create({
            transform: {
                transform: `translate(${this.state.x}px, ${this.state.y}px)`,
                transitionDuration: this.state.duration
            }
        });
    }

    componentDidUpdate() {

        /*  if(this.props.sideDragRevertFlag && this.state.x != 0){
               console.log(this.props.sideDragRevertFlag);
            this.revertDrag();
        }*/
    }

    componentDidMount() {
        interact(this.refs.listItem).draggable({
            restrict: {
                restriction: "parent"
            },
            onstart: (event) => {
                this.dragStartListener(event);
            },
            onmove: (event) => {
                this.dragMoveListener(event);
            },
            onend: (event) => {
                this.dragEndListener(event);
            }
        });

    }

    render() {
        const {index, listItem, onSideDrag, sideDragRevertFlag} = this.props;

        return (
            <li
                ref="listItem"
                className={css("listItem", styles.listItem, this.setTransform().transform)}>
                <a className={css(styles.item)}><img src="/app/assets/images/moveArrow.svg"/></a>
                <Link to={"/categories/"+listItem.name} className={css(styles.item)}>{listItem.name}</Link>
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