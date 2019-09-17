import { Component, OnInit } from '@angular/core';
import {User} from './../../model/user';
import {UserService} from '../../services/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private service:UserService,private router: Router) { }
  user: User = new User();
  users:User[];
  searchtext:String;

  ngOnInit() {
    this.service.getUsers()
      .subscribe( data => {
        this.users = data;
        console.log(this.users);
      });
  }
  deleteUser(id)
  {
    alert(id)
    if(confirm("Are you sure to delete "+id)) {
      alert("record deleted successfully...");
    }
  }
}
