import React, { Suspense } from 'react';
import { reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import AuthProvider from '@containers/provider/AuthProvider';
import ConfigProvider from '@/containers/provider/ConfigProvider';
import RootRouter from '@components/routes';

const GlobalStyle = createGlobalStyle`
    ${reset}
    // custom global Style..
`

const App = () => {
    return (
        <Suspense fallback={'loading'}>
            <GlobalStyle />
            <AuthProvider>
                <ConfigProvider>
                    <RootRouter />
                </ConfigProvider>
            </AuthProvider>
        </Suspense>
    );
};

export default App;