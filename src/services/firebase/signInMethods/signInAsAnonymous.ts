import { auth } from '@core/config/firebase/firebase.auth'
import { signInAnonymously } from 'firebase/auth'
import SignInReturn from './interfaces/SignInReturn.interface'

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
