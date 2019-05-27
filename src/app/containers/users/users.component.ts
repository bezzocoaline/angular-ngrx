import { GetUsers } from './../../store/actions/user.actions';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';


import { selectUserList } from '../../store/selectors/user.selector';
import { Router } from '@angular/router';
import { IAppState } from 'src/app/store/states/app.state';

@Component({
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  users$ = this._store.pipe(select(selectUserList));

  constructor(private _store: Store<IAppState>, private _router: Router) {}

  ngOnInit() {
    this._store.dispatch(new GetUsers());
  }

  navigateToUser(id: number) {
    this._router.navigate(['user', id]);
  }
}
