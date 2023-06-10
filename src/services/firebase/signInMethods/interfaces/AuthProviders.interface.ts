import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth'

export interface AuthProvider {
	[key: string]: GoogleAuthProvider | GithubAuthProvider
}

export interface AuthProviderObj {
	[key: string]: typeof GoogleAuthProvider | typeof GithubAuthProvider
}
