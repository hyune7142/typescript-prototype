// Basic Object Types
export type ObjectAny = {
	[key: string]: any
}

export type ObjectString = {
	[key: string]: string
}

export type ObjectNum = {
	[key: string]: number
}

// Language Config Types
export type Lang = {
	en: ObjectString,
	ko: ObjectString,
	ja: ObjectString,
}

export enum LangType {
	KO = 'ko',
	EN = 'en',
	JP = 'ja',
}

export type LangConfig = {
	locale: string,
	message: ObjectString,
}

// HOC Module Types
export type HocProps = {
	data: object,
	config: object,
	flag?: string,
}

// TestComp
export type User = {
	userid: string,
	password: string,
}
