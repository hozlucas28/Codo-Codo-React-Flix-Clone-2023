import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ROUTES from './constants/ROUTES'

const AuthenticatedUser = lazy(() => import('./components/AuthenticatedUser'))
const NotAuthenticatedUser = lazy(() => import('./components/NotAuthenticatedUser'))

const HomeView = lazy(() => import('@pages/home/views/Home.view'))
const SignInView = lazy(() => import('@pages/signIn/views/SignIn.view'))
const SignUpView = lazy(() => import('@pages/signUp/views/SignUp.view'))

const router = createBrowserRouter([
	{
		path: ROUTES.home.path,
		element: (
			<AuthenticatedUser redirectPath={ROUTES.signIn.path}>
				<HomeView />
			</AuthenticatedUser>
		),
	},
	{
		path: ROUTES.signIn.path,
		element: (
			<NotAuthenticatedUser redirectPath={ROUTES.home.path}>
				<SignInView />
			</NotAuthenticatedUser>
		),
	},
	{
		path: ROUTES.signUp.path,
		element: (
			<NotAuthenticatedUser redirectPath={ROUTES.home.path}>
				<SignUpView />
			</NotAuthenticatedUser>
		),
	},
])

export default router
