import 'dotenv/config'
import express from 'express'
import passport from 'passport'
import {Strategy} from 'passport-google-oauth20'

import * as controller from './controllers'
import * as constant from './util/constant'
import { verifyCallback } from './util/middleware'


const PORT = process.env.PORT || 3000
const PATH = constant.PATH
const app = express()

// auth initializations 
passport.use(new Strategy(constant.strategyObject, verifyCallback))
app.use(passport.initialize())

// routes
app.get(PATH.INDEX, controller.indexController)
app.get(PATH.AUTH_GOOGLE, passport.authenticate('google', constant.scopeObject))
app.get(PATH.CALLBACK_GOOGLE, passport.authenticate('google', constant.redirectLinksObject))


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}!!`)
})