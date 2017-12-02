import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configure-store'

// service worker
import registerServiceWorker from './registerServiceWorker'

// styles
import './index.css'

// component
import App from './components/App'

// configure the redux store
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))

// initialize the service worker
registerServiceWorker()
