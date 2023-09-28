import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import App from './App';
import * as serviceWorker from "./serviceWorker";
import { store } from './admin/store';
const persistor = persistStore(store);

// Use ReactDOM.render instead of ReactDOM.createRoot
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<React.StrictMode>
    <Provider store={store}>
        {/* Wrap your App component with PersistGate */}
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
</React.StrictMode>);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
