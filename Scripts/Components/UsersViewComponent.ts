import {Component} from "@angular/core"
import {UserService} from "../Services/UserService"
import {User} from "../ViewModels/UserViewModel";
import {ROUTER_DIRECTIVES} from "@angular/router"

@Component({
    providers:[UserService],
    directives:[ROUTER_DIRECTIVES],
    template:`
        <div class="card" #ngFor="let user of users">
            <div class="card-block">
            </div>
        </div>
        <table>
         <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
            </tr>
         </thead>
        <tbody>
            <tr *ngFor="let user of users">
                <td>{{user.name}}</td>
                <td>{{user.password}}</td>
                <td>
                    <button class="btn btn-primary" (click)='deleteUser(user)'>Remove</button>
                    <a [routerLink]="['/Users/edit/{{user.name}}']" class="btn btn-primary" routerLinkActive="active">Edit</a>
                </td>
            </tr>
        </tbody
        </table>
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