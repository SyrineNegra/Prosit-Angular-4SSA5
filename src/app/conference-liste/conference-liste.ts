import { Component, signal } from '@angular/core';
import { ConferenceDetails } from '../conference-details/conference-details';
import { conf, Conference } from '../models/conference.model';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'tr[app-conference-liste]',
  imports: [RouterModule, ConferenceDetails],
  templateUrl: './conference-liste.html',
  styleUrl: './conference-liste.css',
})
export class ConferenceListe {


  conferences =signal<Conference[]>(conf);
addConference(newConf: Conference) {
  this.conferences.update(list => [...list, newConf]);
}
     
}
