import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'userpipe'
})
export class UserpipePipe implements PipeTransform {

  transform(users: User[], searchtext: String): User[] {
    if(!searchtext ||!users)
    {
      return users;
    }
    return users.filter(user => user.firstName.toLocaleLowerCase().indexOf(searchtext.toLocaleLowerCase()) !== -1 ||user.lastName.toLocaleLowerCase().indexOf(searchtext.toLocaleLowerCase()) !== -1);
  }

}
