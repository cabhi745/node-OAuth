import 'dotenv/config'
import express from 'express'
import passport, { use } from 'passport'
import cookieSession from 'cookie-session'
import {Strategy} from 'passport-google-oauth20'

import * as controller from './controllers'
import * as constant from './util/constant'
import * as middleware from './util/middleware'


const PORT = process.env.PORT || 3000
const PATH = constant.PATH
const app = express()

//session cookies initialization
passport.serializeUser(middleware.serializeMiddleware)
passport.deserializeUser(middleware.deserializeMiddleware)
app.use(cookieSession(constant.optionsForSession)) // creating a cookie session env

// auth initializations 
passport.use(new Strategy(constant.strategyObject, middleware.verifyCallback))
app.use(passport.initialize())

// authenticate sessions and checks using cookie session secrets
app.use(passport.session())  //using cookieSession and verifying session etc and adding into to req.user

// auth routes
app.get(PATH.AUTH_GOOGLE, passport.authenticate('google', constant.optionsForAuth))
app.get(PATH.CALLBACK_GOOGLE, passport.authenticate('google', constant.optionsForCallback))

// routes
app.get(PATH.INDEX, controller.indexController)
app.get(PATH.SECRET, middleware.isLoggedIn, controller.secretsController)


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}!!`)
})