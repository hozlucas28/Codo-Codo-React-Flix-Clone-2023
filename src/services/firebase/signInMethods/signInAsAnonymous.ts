import { signInAnonymously } from 'firebase/auth'
import signInReturn from './interfaces/signInReturn.interface'
import { auth } from '../../../config/firebase/firebase.auth'

export default async function signInAsAnonymous(): Promise<Pick<signInReturn, 'user'>> {
	let { user }: Pick<signInReturn, 'user'> = { user: null }

	try {
		const result = await signInAnonymously(auth)
		user = result.user
	} catch (error) {
		console.error(error)
	}
	return { user }
}
