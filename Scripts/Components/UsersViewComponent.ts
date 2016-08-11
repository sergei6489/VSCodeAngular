import {Component} from "@angular/core"
import {UserService} from "../Services/UserService"
import {User} from "../ViewModels/UserViewModel";
import {ROUTER_DIRECTIVES} from "@angular/router"

@Component({
    template:`
    `
})

export class UsersViewComponent {

    users: Array<User> = [];
    public constructor(public service: UserService){
        this.refreshUsers();
    }

    refreshUsers()
    {
        this.service.getUsers().subscribe(res=> {
            res.forEach((res: User)=>{
                this.users.push(res);
            });
        } )
    }

    deleteUser(user: User)
    {
        var self = this;
        this.service.deleteUser(user.name).subscribe(res=>{
            if (res==true)
            {
                this.users.splice(this.users.indexOf(user),1);
            }
        })
    }
}