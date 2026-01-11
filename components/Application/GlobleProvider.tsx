"use client"
import React, { ReactNode } from 'react'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '@/store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Loading from './Loading';

interface GlobleProviderProps {
    children: ReactNode
}
const GlobleProvider = ({ children }: GlobleProviderProps) => {
    const queryClient = new QueryClient()

    return (

        <QueryClientProvider client={queryClient}>

            <Provider store={store}>
                <PersistGate loading={<Loading />} persistor={persistor}>
                    {children}
                </PersistGate>
            </Provider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>

    )
}

export default GlobleProvider
