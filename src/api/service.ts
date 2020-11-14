import firebase from 'firebase/app';

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
                console.log("Error: ", err); // TODO handle toast
            });
    }
    
    login = async (loginData: { email: string, password: string }) => {
        const res = await firebase.auth().signInWithEmailAndPassword(loginData.email, loginData.password)
        const user = firebase.auth().currentUser;
        if (user) {
            const { displayName, email, photoURL } = user;
            return { displayName, email, photoURL };
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
}

const service = new Service();
export default service;