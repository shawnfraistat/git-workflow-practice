// events.js

const ui = require('./ui.js')
const api = require('./api.js')

const onButtonClick = () => {
  event.preventDefault()
  api.getAllBooks()
  .then(ui.displayAllBooks)
}

const onClearClick = () => {
  event.preventDefault()
  ui.clearDisplay()
}

module.exports = {
  onButtonClick,
  onClearClick
}
