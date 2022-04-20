import { Inject, Injectable } from "@angular/core";
import { IUser } from "../interfaces/user";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable()

export class UserService {

  private users = new BehaviorSubject<IUser[] | null>(null);
  users$ = this.users.asObservable();

  private user = new BehaviorSubject<IUser | null>(null);
  user$ = this.user.asObservable();

  constructor(private http: HttpClient) {
  }

  loadUsers = (search: string = '') => {
    const query = search ? `?email_like=${search}` : '';
    this.users.next(null);
    this.http.get<IUser[]>(`api/users${query}`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(users => this.users.next(users));
  }

  loadUser = (id: number) => {
    this.users.next(null);
    this.http.get<IUser>(`api/users/${id}`).subscribe(user => this.user.next(user))
  }
}
