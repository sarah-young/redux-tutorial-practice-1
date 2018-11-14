import React , { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
        onClick={ () => this.props.selectBook(book) }
        key={ book.title }
        className="list-group-item">
        { book.title }
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
      { this.renderList() }
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever gets returned will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}
//Anything returned to this function will end up as props on the BookList container
// Available to props on container (where it's defined)
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
  // dispatch function takes actions, receives them, and sends them to reducers
}

// Promote BookList from a component to a container
// It needs to know about this new dispatch method, selectBook.
// Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
