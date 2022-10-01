import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../shared/interfaces/user-interface';
import { Endpoints } from '../shared/enums/endpoints';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(`${Endpoints.users}`).pipe(
      map(response => {
        const data: UserInterface[] = [];
          response.forEach(element => {
            data.push({
              firstName: element.firstName,
              lastName: element.lastName,
              email: element.email,
              degree: element.degree
            });
          });
          return data;
      })
    )
  }
}
