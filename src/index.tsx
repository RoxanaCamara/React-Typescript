import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppRouters from './routers/AppRouters'
import store from './store/store'


render(
  <Provider store={store}>
    <AppRouters />
  </Provider>,
  document.getElementById('root')
)