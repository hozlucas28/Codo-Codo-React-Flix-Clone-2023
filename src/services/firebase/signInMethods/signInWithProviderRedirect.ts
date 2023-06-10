import { signInWithRedirect } from 'firebase/auth'
import { authProvider as authProviderType, providers } from './types/providers.types'
import { auth } from '../../../config/firebase/firebase.auth'

export default async function signInWithProviderRedirect(provider: providers) {
	const authProvider = authProviderType[provider]

	try {
		await signInWithRedirect(auth, authProvider)
	} catch (error) {
		console.error(error)
	}
}
