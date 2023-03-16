import { StrictMode } from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from 'components/app/app';
import { createApi } from './services/api';
import { reducer } from 'store/reducer';
import { getDataQuests } from 'store/api-actions';

const api = createApi();

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  )
);

(store.dispatch(getDataQuests()));

render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
