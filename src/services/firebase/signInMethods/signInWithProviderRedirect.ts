import { auth } from '@core/config/firebase/firebase.auth'
import { signInWithRedirect } from 'firebase/auth'
import { authProvider as authProviderType, providers } from './types/providers.types'

export default async function signInWithProviderRedirect(provider: providers) {
	const authProvider = authProviderType[provider]

	try {
		await signInWithRedirect(auth, authProvider)
	} catch (error) {
		console.error(error)
	}
}
