import { bootstrap }    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import { appMain } from './appMain';
import {APP_ROUTER_PROVIDERS} from './Routers/app.routes';
import {NgModule} from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule   }    from '@angular/forms';
import {UserLoginComponent} from './Components/UserLoginComponent';
import {UserRegisterComponent} from './Components/UserRegisterComponent';
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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTER_PROVIDERS
  ],
  declarations: [
    UserLoginComponent,
    UserRegisterComponent,
    ShipmentsComponent,
    DateTimeControl,
    SearchControl,
    PassengersControl,
    ValidationsMessagesControl
  ],
  providers: [
      HTTP_PROVIDERS,
      UserService,
      ShipmentService,
      ValidationService,
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