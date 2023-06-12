import { GithubAuthProvider, GoogleAuthProvider, getAuth } from 'firebase/auth'
import firebaseApp from './firebase.config'

const auth = getAuth(firebaseApp)

const githubAuthProvider = new GithubAuthProvider()
const googleAuthProvider = new GoogleAuthProvider()

export { auth, githubAuthProvider, googleAuthProvider }
