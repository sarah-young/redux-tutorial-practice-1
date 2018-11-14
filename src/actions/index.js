// will contain all action creators.

export function selectBook(book) {
// selectBook is an action creator. It needs to return an action.
// (an object with a type property)
  return {
    type: 'BOOK_SELECTED', //will replace this string later with a variable
    payload: book
  };
}

// parameters - book (aka book object with a .title)
