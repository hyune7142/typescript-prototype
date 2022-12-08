import React, { useState, useEffect } from "react";
import { IntlProvider } from 'react-intl'
import { langConfig as lang } from '@env/configs/langConfig';
import  { HocProps, LangType, LangConfig } from '@@types/common';

function moduleHOC(WrapperComponent: React.FC<HocProps>) {
	const ModuleWrapper = (props: HocProps) => {
		const [data, setData] = useState<object>(props.data || {});
		const [config, setConfig] = useState<object>(props.config || {});
		const [langConfig, setLangConfig] = useState<LangConfig>({
			locale: 'ko',
			message: lang['ko']
		});

		useEffect(() => {
			// Language Setting
			const userLang: LangType = _getUserLanguageCode();
			setLangConfig({
				locale: userLang,
				message: lang[userLang]
			})
		}, []);

		const _getUserLanguageCode = (): LangType => {
			let userInfo = JSON.parse(sessionStorage.getItem('userInfo') || '{}');
			let defaultLang = navigator.languages[0];
			if(userInfo && userInfo.lang) defaultLang = userInfo.lang
			switch(defaultLang) {
				case 'kr':
				case 'ko':
				case 'ko-KR':
					return 'ko';
				case 'jp':
				case 'ja':
					return 'ja';
				default:
					return 'en';
			}
		}


		return (
			<IntlProvider locale={ langConfig.locale } messages={ langConfig.message }>
				<React.Fragment>
					<WrapperComponent flag="module" data={data} config={config} />
				</React.Fragment>
			</IntlProvider>
		)
	}

	return ModuleWrapper;
}

export default moduleHOC;
