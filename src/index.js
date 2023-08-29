import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import App from './App';
// import authReducer from './features/AuthSlice' // Adjust the path based on your project structure

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
    // auth: authReducer,
}));

const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(authMiddleware),
});

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

