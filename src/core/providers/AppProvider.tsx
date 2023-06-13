import { HelmetProvider } from 'react-helmet-async'
import { NextUIProvider } from '@nextui-org/react'
import defaultTheme from '../config/nextUI/nextUI.themes'

export default function AppProvider({ children }: { children: JSX.Element }) {
	return (
		<HelmetProvider>
			<NextUIProvider theme={defaultTheme}>{children}</NextUIProvider>
		</HelmetProvider>
	)
}
