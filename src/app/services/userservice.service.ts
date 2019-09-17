import {Injectable} from '@angular/core';
import {HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import {HttpClient } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:9090/user';
	//private userUrl = '/api';
  user:User=new User();
  public getUsers() {
    return this.http.get<User[]>(this.userUrl+"/getUsers"); 
  }
  public getUserByFirstName(user) {
    return this.http.get<User[]>(this.userUrl+"/getUser"); 
  }
  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }
  public setter(user)
  {
    this.user=user;
  }
  public getter()
  {
    return this.user;
  }

}