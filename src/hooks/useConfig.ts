import { useState, useEffect, useCallback } from 'react';
import { LangConfig, LangType } from '@/types/common';
import { ConfigContextType } from '@/types/provider';
import { rootConfig } from '@env/rootConfig';

export default function useConfig(): ConfigContextType {
    const {language, client} = rootConfig;
    const [langConfig, setLangConfig] = useState<LangConfig>({
        locale: LangType.KO,
        message: language[LangType.KO]
    });
    
    useEffect(() => {
        resetConfig();
    }, []);

    const _getUserLanguageCode = (): LangType => {
        const userInfo = JSON.parse(sessionStorage.getItem('userInfo') || '{}');
        let defaultLang = navigator.languages[0];
        if(userInfo && userInfo.lang) defaultLang = userInfo.lang
        switch(defaultLang) {
            case 'kr':
            case 'ko':
            case 'ko-KR':
                return LangType.KO;
            case 'jp':
            case 'ja':
                return LangType.JP;
            default:
                return LangType.EN;
        }
    }

    const getLnagConfig = useCallback((type?: LangType): LangConfig => {
        let userLang: LangType = _getUserLanguageCode();
        if(type) {
            userLang = type;
        }
        const langConfig = {
            locale: userLang,
            message: language[userLang]
        }
        return langConfig;
    }, [language]);

    const resetConfig = useCallback(() => {
        setLangConfig(getLnagConfig());
    }, [rootConfig])

    return {
        resetConfig,
        langConfig,
        setLanguage: getLnagConfig,
    }
}