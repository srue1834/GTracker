/* eslint-disable no-alert */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'

import Signup from './components/SignUp'

const App = () => (
  <div>
    <style>{'body { background-color: transparent; }'}</style>
    <Signup />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
