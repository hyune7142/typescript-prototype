import React, { createContext } from 'react';
import useConfig from '@hooks/useConfig';
import { ConfigContextType } from '@@types/provider';
import { IntlProvider } from 'react-intl';

const ConfigContext = createContext<ConfigContextType>({} as ConfigContextType);

const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
    const config = useConfig();
    const { langConfig } = config;
    return (
        <ConfigContext.Provider value={config}>
            <IntlProvider locale={ langConfig.locale } messages={ langConfig.message }>
                {children}
            </IntlProvider>
        </ConfigContext.Provider>
    );
};

export { ConfigContext }
export default ConfigProvider;