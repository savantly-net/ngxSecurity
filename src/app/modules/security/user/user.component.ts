import { Component, OnInit } from '@angular/core';

export abstract class IUser {
  principal: string;
  displayName: string;
  authenticated: boolean;
  roles: string[];
}

@Component({
  selector: 'app-user',
  template: `
    <p>
      user works!
    </p>
`,
  styles: []
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
