import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import { githubAuthProvider, googleAuthProvider } from '@core/config/firebase/firebase.auth'
import { AuthProvider, AuthProviderObj } from '../interfaces/AuthProviders.interface'

export type providers = 'github' | 'google'

export const authProvider: AuthProvider = {
	google: googleAuthProvider,
	github: githubAuthProvider,
}

export const authProviderObj: AuthProviderObj = {
	google: GoogleAuthProvider,
	github: GithubAuthProvider,
}
