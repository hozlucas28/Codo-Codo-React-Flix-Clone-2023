import { OAuthCredential, User } from 'firebase/auth'

export default interface SignInReturn {
	user: User | null
	token: string | null
	credential: OAuthCredential | null
}
