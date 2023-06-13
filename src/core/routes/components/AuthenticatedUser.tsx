import { Navigate } from 'react-router-dom'
import ProtectedRoute from './types/ProtectedRoute'

export default function AuthenticatedUser({ children, redirectPath }: ProtectedRoute) {
	const isAuthenticated = false

	return isAuthenticated ? (
		{ ...children }
	) : (
		<Navigate
			to={redirectPath}
			replace={true}
		/>
	)
}
