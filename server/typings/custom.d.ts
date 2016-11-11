declare namespace Express {
    interface Session {
        isAuth: boolean,
        user: string
    }
}
import 'reflect-metadata';