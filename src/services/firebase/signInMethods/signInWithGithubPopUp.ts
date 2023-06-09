import { GithubAuthProvider, signInWithPopup } from 'firebase/auth'
import signInReturn from './interfaces/signInReturn.interface'
import { auth, githubAuthProvider } from '../../../config/firebase/firebase.auth'

export default async function signInWithGithubPopUp(): Promise<signInReturn> {
	let { user, token, credential }: signInReturn = {
		user: null,
		token: null,
		credential: null,
	}

	try {
		const result = await signInWithPopup(auth, githubAuthProvider)
		credential = GithubAuthProvider.credentialFromResult(result)
		token = credential?.accessToken ?? null
		user = result.user
	} catch (error) {
		console.error(error)
	}
	return { user, token, credential }
}
