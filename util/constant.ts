import { session } from "passport"

export const PATH = {
    INDEX : '/',
    AUTH : '/auth',
    SECRET : '/secretPage',
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

export const optionsForCallback = {
    failureRedirect : PATH.AUTH_FAILURE,
    successRedirect : PATH.SECRET,
    session: true
}

export const optionsForAuth = {
    scope : ['email', 'profile']
}

export const optionsForSession = {
    name : 'session',
    maxAge: 1000 * 60 * 60 * 24,
    keys: ['secret1', 'secret2']
}