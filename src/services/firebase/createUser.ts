import { auth } from '@core/config/firebase/firebase.auth'
import { User, createUserWithEmailAndPassword } from 'firebase/auth'

export default async function createUser({ email, password }: { email: string; password: string }): Promise<User | null> {
	let user: User | null = null

	try {
		const userCredential = await createUserWithEmailAndPassword(auth, email, password)
		user = userCredential.user
	} catch (error) {
		console.error(error)
	}
	return user
}
