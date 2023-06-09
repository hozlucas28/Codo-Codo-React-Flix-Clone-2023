import { signOut } from 'firebase/auth'
import { auth } from '../../../config/firebase/firebase.auth'

export default async function signOutFromAccount() {
	try {
		await signOut(auth)
	} catch (error) {
		console.error(error)
	}
}
