"use client";
import { Provider } from 'react-redux'
import configureStore from '@/store';
import { PersistGate } from 'redux-persist/integration/react';

const { persistor, store } = configureStore();

export default function ReduxProvider({ children }) {
    return <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {children}
        </PersistGate>
    </Provider>;
};  