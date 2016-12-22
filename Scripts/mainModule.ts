import { appMain } from './appMain';
import { HttpModule } from "@angular/http";
import {AppRoutingModule} from './Routers/app.routes';
import {NgModule, Provider, forwardRef} from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule   }    from '@angular/forms';
import {UserLoginComponent} from './Components/UserLoginComponent';
import {UserRegisterComponent} from './Components/UserRegisterComponent';
import {UsersViewComponent} from './Components/UsersViewComponent';
import {TicketComponent} from './Components/TicketComponent';
import {ShipmentsComponent} from './Components/ShipmentsComponent';
import {UserService} from './Services/UserService';
import {ShipmentService} from './Services/ShipmentService';
import {SearchViewModel} from './ViewModels/SearchViewModel'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {SearchControl} from './HelpControls/SearchControl';
import {DateTimeControl} from './HelpControls/DateTimeControl';
import {PassengersControl} from './HelpControls/PassengersControl';
import {ValidationsMessagesControl} from './HelpControls/ValidationMessagesControl';
import {ValidationService} from './Services/ValidationService'
import { RouterModule }   from '@angular/router';
import {globalVariables} from './globalVariables'


@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    UserLoginComponent,
    UserRegisterComponent,
    ShipmentsComponent,
    DateTimeControl,
    SearchControl,
    PassengersControl,
    TicketComponent,
    UsersViewComponent,
    appMain,
    ValidationsMessagesControl
  ],
  providers: [
      UserService,
      ShipmentService,
      ValidationService,
      globalVariables,
      SearchViewModel,
      {
        provide: 'NameValidator',
        useFactory: (userAccountService:UserService) =>(control)=>
        {  
            return ValidationService.userLoginValidator(control,userAccountService);       
        },
        deps: [UserService]
      }
  ],
  bootstrap: [ appMain ]
})

export class AppModule {
}