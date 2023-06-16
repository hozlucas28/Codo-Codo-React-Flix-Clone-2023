import { createTheme } from '@nextui-org/react'

const lightTheme = createTheme({
	type: 'light',
	theme: {
		colors: {},
	},
})

const darkTheme = createTheme({
	type: 'dark',
	theme: {
		colors: {
			primary: '#1db954',
			secondary: '#212121',
			tertiary: '#121212',
			quaternary: '#535353',
			quintennial: '#b3b3b3',
		},
	},
})

export { lightTheme, darkTheme as default }
