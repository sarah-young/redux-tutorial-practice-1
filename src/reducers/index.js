import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
  // Key = piece of state; Value = BooksReducer output (array of books in this case)
});

export default rootReducer;
