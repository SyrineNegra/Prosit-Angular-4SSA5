import { Component } from '@angular/core';
import { Notifications } from '../notifications/notifications';
import { Userprofile } from '../userprofile/userprofile';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, Notifications, Userprofile],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
