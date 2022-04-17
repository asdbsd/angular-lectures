import { Inject, Injectable } from "@angular/core";
import { IUser } from "../interfaces/user";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class UserService {
  constructor(private http: HttpClient) {
   }

   loadUsers(search: string = '') {
     const query = search ? `?email_like=${search}` : '';
     return this.http.get<IUser[]>(`https://jsonplaceholder.typicode.com/users${query}`);
   }

   loadUser(id: number) {
      return this.http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
   }
}
