// ui.js

const clearDisplay = () => {
  $('#books-library').html('')
}

const displayAllBooks = data => {
  const newHTML = template(data)
  $('#books-library').html(newHTML)
}

module.exports = {
  clearDisplay,
  displayAllBooks,
}
