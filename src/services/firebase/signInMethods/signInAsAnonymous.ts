import { signInAnonymously } from 'firebase/auth'
import SignInReturn from './interfaces/SignInReturn.interface'
import { auth } from '../../../config/firebase/firebase.auth'

export default async function signInAsAnonymous(): Promise<Pick<SignInReturn, 'user'>> {
	let { user }: Pick<SignInReturn, 'user'> = { user: null }

	try {
		const result = await signInAnonymously(auth)
		user = result.user
	} catch (error) {
		console.error(error)
	}
	return { user }
}
