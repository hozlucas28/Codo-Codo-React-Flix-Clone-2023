import AppProvider from '@core/providers/AppProvider'
import RouterProvider from '@/core/routes/components/RouterProvider'

export default function App() {
	return (
		<AppProvider>
			<RouterProvider />
		</AppProvider>
	)
}
