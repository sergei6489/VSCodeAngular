import { NgModule }             from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {UsersViewComponent } from "../Components/UsersViewComponent";
import {UserEditComponent} from "../Components/UserEditComponent";
import {UserRegisterComponent} from "../Components/UserRegisterComponent";
import {UserLoginComponent} from "../Components/UserLoginComponent";
import {ShipmentsComponent} from "../Components/ShipmentsComponent";
import {TicketComponent } from "../Components/TicketComponent";

export const routes: Routes = [
    { path: '', component: ShipmentsComponent },
    { path: 'ticketBuy', component: TicketComponent },
    { path: "users", component: UsersViewComponent,
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
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
