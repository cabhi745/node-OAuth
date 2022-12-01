export const PATH = {
    INDEX : '/',
    AUTH : '/auth',
    SECRET : '/secret',
    get AUTH_GOOGLE() {
        return `${this.AUTH}/google`
    },
    get CALLBACK_GOOGLE() {
        return `${this.AUTH_GOOGLE}/callback`
    },
    get AUTH_FAILURE() {
        return `${this.AUTH}/failure`
    }
}

export const strategyObject = {
    callbackURL : PATH.CALLBACK_GOOGLE,
    clientID : process.env.CLIENTID || '',
    clientSecret : process.env.SECRET || ''
}

export const redirectLinksObject = {
    failureRedirect : PATH.AUTH_FAILURE,
    successRedirect : PATH.SECRET
}

export const scopeObject = {
    scope : ['email', 'profile']
}