import { Suspense } from 'react'
import { RouterProvider as RouterProviderDOM } from 'react-router-dom'
import router from '../app.router'
import Loading from './Loading'

export default function RouterProvider() {
	return (
		<Suspense fallback={<Loading />}>
			<RouterProviderDOM
				router={router}
				fallbackElement={<Loading />}
			/>
		</Suspense>
	)
}
