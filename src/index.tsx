import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { InicioScreen } from './components/InicioScreen/InicioScreen'
import store from './store/store'


render(
  <Provider store={store}>
    <InicioScreen />
  </Provider>,
  document.getElementById('root')
)