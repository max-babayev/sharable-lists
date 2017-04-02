import React from 'react';
import BookListItem from './BookListItem';
import {StyleSheet, css} from 'aphrodite';

export default class ItemList extends React.Component {

    render() {
        const {
            books = [],
            isFetching
        } = this.props;

        return (
            <div>
                <ul className={css(styles.bookList, isFetching && styles.bookListLoading)}>{books.map((book, index) => {
                        return <li key={index} className={css(styles.bookItem)}><BookListItem book={book}/></li>;
                    })}</ul>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    bookList: {

        "display": "flex",
        "flex-wrap": "no-wrap",
        "flex-direction": "column",
        "justify-content": "space-between",
        "width": "100%"
    },
    bookListLoading: {
        opacity: 0.3
    },
    bookItem: {
        "list-style-type": "none",
        "margin-top": "10px",
        "width": "100%"
    }
});
