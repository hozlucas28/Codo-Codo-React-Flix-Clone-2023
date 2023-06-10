import { createBrowserRouter } from 'react-router-dom'
import ROUTES from './constants/ROUTES'

const router = createBrowserRouter([
	{
		path: ROUTES.home.path,
		element: <h1>Home</h1>,
	},
	{
		path: ROUTES.signIn.path,
		element: <h1>Sign In</h1>,
	},
	{
		path: ROUTES.signUp.path,
		element: <h1>Sign Up</h1>,
	},
])

export default router
