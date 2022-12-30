const {
  addBook,
  getAllBook,
  getBook,
  editBook,
  deleteBook
} = require('./handler')

const routes = [
  {
    method: 'POST',
    path: '/book',
    handler: addBook
  },
  {
    method: 'GET',
    path: '/book',
    handler: getAllBook
  },
  {
    method: 'GET',
    path: '/book/{id}',
    handler: getBook
  },
  {
    method: 'PUT',
    path: '/book/{id}',
    handler: editBook
  },
  {
    method: 'DELETE',
    path: '/book/{id}',
    handler: deleteBook
  }
]

module.exports = routes
