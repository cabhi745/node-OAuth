import { NextFunction, Request, Response } from "express";

export function verifyCallback (accessToken: string, refreshToken: string, profile: any, done: any){
    done(null, profile)
}

export function isLoggedIn (req: Request, res: Response, next: NextFunction) {
    const isLoggedIn  = req.isAuthenticated() && req.user
    if(!isLoggedIn) {
        return res.json({
            error: 'notLoggedIn'
        })
    }
    next()
}

export function serializeMiddleware (user: any, done: (err: any, id?: unknown) => void) {
    console.log(user.id)
    done(null, user.id)
}

export function deserializeMiddleware (user: any, done: (err: any, id?: unknown) => void) {
    done(null, user)
}