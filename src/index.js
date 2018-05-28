import 'babel-polyfill';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import App from 'containers';
import store from 'store';
import '!style-loader!css-loader!./theme/global.scss';

const renderApp = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept('containers', () => renderApp(App));
}
