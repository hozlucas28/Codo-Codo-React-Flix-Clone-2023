import { signInWithRedirect } from 'firebase/auth'
import { auth, googleAuthProvider } from '../../../config/firebase/firebase.auth'

export default async function signInWithGoogleRedirect() {
	try {
		await signInWithRedirect(auth, googleAuthProvider)
	} catch (error) {
		console.error(error)
	}
}
