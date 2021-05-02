import { Component, OnInit } from '@angular/core';
import {RequestUpdate, User} from '../user.model';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  id: string;
  user: User;

  // tslint:disable-next-line:variable-name
  constructor(private userService: UserService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(
      res => {
        this.user = res.data;
      }
    );
  }

  // tslint:disable-next-line:typedef
  delete() {
    this.userService.deleteUser(this.id).subscribe(
      res => {
        alert('Removido com sucesso!');
        this._route.navigate(['/users']).then();
      }
    );
  }

  // tslint:disable-next-line:typedef
  cancel(){
    this._route.navigate(['/users']).then();
  }

}
