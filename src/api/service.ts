import firebase from 'firebase/app';
import { toast } from 'react-toastify';

import { IUser } from 'app-context/contextTypes';

class Service {
    _request = (url: string, params: any) => {
        fetch(url, params)
            .then(res => {
                switch (res.status) {
                    case 200:
                    case 201:
                    case 203:
                    case 204:
                        return res.json();
                    case 400:
                        throw new Error('Bad Request')
                    case 401:
                        throw new Error("Anauthorized...");
                    case 500:
                    case 503:
                        throw new Error('Server Error');
                    default:
                        throw new Error('Unknown Error');
                }
            })
            .catch(err => {
                toast.error('Network Error: ', err && err.message ? err.message : 'Unknown Error')
            });
    }

    login = async (loginData: { email: string, password: string }) => {
        const res = await firebase.auth().signInWithEmailAndPassword(loginData.email, loginData.password)
        const user = firebase.auth().currentUser;
        console.log("user: ", user);
        if (user) {
            const { displayName, email, photoURL, phoneNumber } = user;
            return { displayName, email, photoURL, phoneNumber };
        }
        return res;
    }

    signup = async (signupData: { name: string, email: string, password: string }) => {
        const res = await firebase.auth().createUserWithEmailAndPassword(signupData.email, signupData.password);
        const user = firebase.auth().currentUser;
        if (user) {
            await user.updateProfile({
                displayName: signupData.name,
                photoURL: 'https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png',
            })
            return this.login({ email: signupData.email, password: signupData.password });
        }
        return res;
    }

    googleSignIn = async (): Promise<IUser> => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const googleRes = await firebase.auth().signInWithPopup(provider);
        const { user } = googleRes;
        console.log("Google user: ", user);
        if (user) {
            const { uid, displayName, email, photoURL, phoneNumber } = user;
            return { id: uid, displayName, email, photoURL, phoneNumber };
        } else {
            throw new Error('User Not Found.');
        }
    }

    // facebookLogin = async (): Promise<IUser> => {
    //     const provider = new firebase.auth.FacebookAuthProvider();
    //     const fbRes = await firebase.auth().signInWithPopup(provider);
    //     console.log("fbRes: ", fbRes);
    // }
}

const service = new Service();
export default service;