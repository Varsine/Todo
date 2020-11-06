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
    login = (loginData: { email: string, password: string }) => {
        // return this._request('api/login', { body: JSON.stringify(loginData) })
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id: 1,
                    name: 'John Doe',
                    email: 'john.doe@test.com'
                })
            }, 3000)
        }) // test login imitiation
    }
    signup = (signupData: { name: string, email: string, password: string }) => {
        // return this._request('api/login', { body: JSON.stringify(signupData) })
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id: 1,
                    name: 'John Doe',
                    email: 'john.doe@test.com'
                })
            }, 3000) // test signup imitation
        })
    }
}

const service = new Service();
export default service;