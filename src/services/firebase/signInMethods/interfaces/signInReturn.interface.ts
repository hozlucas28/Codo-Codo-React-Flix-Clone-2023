import { OAuthCredential, User } from 'firebase/auth'

export default interface signInReturn {
	user: User | null
	token: string | null
	credential: OAuthCredential | null
}
