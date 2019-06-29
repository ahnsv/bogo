const handle = (promise) =>
    promise.then(res => {
        if (res.ok) {
            return res.json();
        }
        // django module has a default error message in its body
        throw res.json()
    })
        .then(json => {
            return json;
        })
        .catch(err => {
            throw err;
        });

export const login = (id, pw) => handle(fetch("http://127.0.0.1:8000/api/v1/auth/login/", {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({
        "username": id,
        "password": pw
    }),
    mode: "cors"
}));

export const signup = ({id, pw, pwConfirm}) => handle(fetch("http://127.0.0.1:8000/api/v1/auth/signup/", {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({
        username: id,
        password1: pw,
        password2: pwConfirm
    })
}))

export const AuthStore = {
    token: '',
    isAuthenticated: false,
    authenticate: function(token) {
        this.token = token;
        this.isAuthenticated = true;
    },
    signout: function() {
        this.token = '';
        this.isAuthenticated = false;
    }
}
