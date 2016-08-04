import {Component} from "@angular/core"

@Component({
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
                    <button class="btn btn" (click)='deleteUser(user.name)'>Remove</button>
                    
                </td>
            </tr>
        </tbody
        </table>
    `
})

export class UsersViewComponent {
}