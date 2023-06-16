/// <reference types="vite-plugin-svgr/client" />
import RouterProvider from '@/core/routes/components/RouterProvider'
import AppProvider from '@core/providers/AppProvider'

export default function App() {
	return (
		<AppProvider>
			<RouterProvider />
		</AppProvider>
	)
}
