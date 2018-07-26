import Vue from 'vue'

export default {
    requestLogin:requestLogin
}

function requestLogin(name, password, callback) {
    Vue.http.post("http://localhost:8444/api/user/login", { name: name, password: password })
        .then((res) => {
            if (callback) {
                callback(res.body, null)
            }
        }, (err) => {
            if (callback) {
                callback(null, err)
            }
        })
}
