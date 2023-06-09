import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <h1>Home</h1>,
	},
	{
		path: '/signIn',
		element: <h1>Sign In</h1>,
	},
	{
		path: '/signUp',
		element: <h1>Sign Up</h1>,
	},
])

export default router
