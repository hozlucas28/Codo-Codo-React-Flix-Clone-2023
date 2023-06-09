import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import signInReturn from './interfaces/signInReturn.interface'
import { auth, googleAuthProvider } from '../../../config/firebase/firebase.auth'

export default async function signInWithGooglePopUp(): Promise<signInReturn> {
	let { user, token, credential }: signInReturn = {
		user: null,
		token: null,
		credential: null,
	}

	try {
		const result = await signInWithPopup(auth, googleAuthProvider)
		credential = GoogleAuthProvider.credentialFromResult(result)
		token = credential?.accessToken ?? null
		user = result.user
	} catch (error) {
		console.error(error)
	}
	return { user, token, credential }
}
