import { signInWithRedirect } from 'firebase/auth'
import { auth, githubAuthProvider } from '../../../config/firebase/firebase.auth'

export default async function signInWithGithubRedirect() {
	try {
		await signInWithRedirect(auth, githubAuthProvider)
	} catch (error) {
		console.error(error)
	}
}
