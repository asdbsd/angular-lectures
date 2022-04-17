import { Component, OnInit} from '@angular/core';
import { IUser } from '../../interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {

 

  users: IUser[] | undefined;
  constructor(private userService: UserService) {  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(search: string = ''): void {
    this.users = undefined;
    this.userService.loadUsers(search).subscribe(users => this.users = users);
  }
  reloadButtonHandler(): void {
    this.loadUsers();
  }

  searchButtonHandler(search: HTMLInputElement): void {
    const { value } = search;
    this.loadUsers(value);
  }



}
