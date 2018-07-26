export default {
    validateLoginParams: validateLoginParams
}

function validateLoginParams(name, password) {
    return (password && password.length > 5) ? 'pass' : 'password too short.'
}