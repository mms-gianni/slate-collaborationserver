const Connection = require('@slate-collaborative/backend')
const defaultValue = require('./defaultValue')
const express = require('express')

const PORT = process.env.PORT || 9000

const server = express()
  .use(express.static('build'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))

const config = {
  entry: server, // or specify port to start io server
  defaultValue,
  saveTreshold: 2000,
  onAuthRequest: async (query, socket) => {
    // some query validation
    return true
  },
  onDocumentLoad: async pathname => {
    // return initial document ValueJSON by pathnme
    return defaultValue
  },
  onDocumentSave: async (pathname, document) => {
    // save document
  }
}

const connection = new Connection(config)
