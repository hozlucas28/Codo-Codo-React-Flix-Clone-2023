import RouterProvider from '@/core/routes/components/RouterProvider'
import AppProvider from '@core/providers/AppProvider'

export default function App() {
	return (
		<AppProvider>
			<RouterProvider />
		</AppProvider>
	)
}
