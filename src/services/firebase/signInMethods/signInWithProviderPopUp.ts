import { auth } from '@core/config/firebase/firebase.auth'
import { signInWithPopup } from 'firebase/auth'
import { authProviderObj as authProviderObjType, authProvider as authProviderType, providers } from './types/providers.types'
import SignInReturn from './interfaces/SignInReturn.interface'

export default async function signInWithProviderPopUp(provider: providers): Promise<SignInReturn> {
	let { user, token, credential }: SignInReturn = {
		user: null,
		token: null,
		credential: null,
	}

	const authProvider = authProviderType[provider]
	const authProviderObj = authProviderObjType[provider]

	console.log(authProvider, authProviderObj)

	try {
		const result = await signInWithPopup(auth, authProvider)
		credential = authProviderObj.credentialFromResult(result)
		token = credential?.accessToken ?? null
		user = result.user
	} catch (error) {
		console.error(error)
	}
	return { user, token, credential }
}
