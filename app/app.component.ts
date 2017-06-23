import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    users: User[] = [{
        id: 25,
        name: 'Jhon',
        username: 'jhond'
    },
    {
        id: 26,
        name: 'Luis',
        username: 'luisc'
    },
    {
        id: 27,
        name: 'Mark',
        username: 'markd'
    }];
    activeUser: User;

    selectUser(user: User): void {
        this.activeUser = user;
        console.log(user);
    }

    onUserCreated($event) {
        console.log($event);
        this.users.push($event.user);
    }
}