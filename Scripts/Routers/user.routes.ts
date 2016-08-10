import {RouterConfig} from "@angular/router";
import {UsersViewComponent } from "../Components/UsersViewComponent";
import {UserEditComponent} from "../Components/UserEditComponent";
import {UserRegisterComponent} from "../Components/UserRegisterComponent";
import {UserLoginComponent} from "../Components/UserLoginComponent"

export const UserRoutes: RouterConfig = [
    { 
        path: "users", component: UsersViewComponent,
        children:[
            { path:"edit/id:", component: UserEditComponent},
        ] 
    },
    { 
        path:"login", component: UserLoginComponent 
    },
    {
        path:"register", component: UserRegisterComponent
    }
]