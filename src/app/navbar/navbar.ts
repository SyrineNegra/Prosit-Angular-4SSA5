import { Component } from '@angular/core';
import { Notifications } from '../notifications/notifications';
import { Userprofile } from '../userprofile/userprofile';

@Component({
  selector: 'app-navbar',
  imports: [Notifications, Userprofile],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
