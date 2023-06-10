import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import { AuthProvider, AuthProviderObj } from '../interfaces/AuthProviders.interface'
import { githubAuthProvider, googleAuthProvider } from '../../../../config/firebase/firebase.auth'

export type providers = 'github' | 'google'

export const authProvider: AuthProvider = {
	google: googleAuthProvider,
	github: githubAuthProvider,
}

export const authProviderObj: AuthProviderObj = {
	google: GoogleAuthProvider,
	github: GithubAuthProvider,
}
