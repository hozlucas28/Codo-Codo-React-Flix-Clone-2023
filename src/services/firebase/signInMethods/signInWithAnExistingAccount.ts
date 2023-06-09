import { User, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../config/firebase/firebase.auth'

export default async function signInWithAnExistingAccount({
	email,
	password,
}: {
	email: string
	password: string
}): Promise<User | null> {
	let user: User | null = null

	try {
		const userCredential = await signInWithEmailAndPassword(auth, email, password)
		user = userCredential.user
	} catch (error) {
		console.error(error)
	}
	return user
}
