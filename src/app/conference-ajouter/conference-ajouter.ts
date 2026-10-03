import { Component, input, model, output, signal } from '@angular/core';
import { Conference } from '../models/conference.model';

@Component({
  selector: 'app-conference-ajouter',
  imports: [],
  templateUrl: './conference-ajouter.html',
  styleUrl: './conference-ajouter.css',
})
export class ConferenceAjouter {
  nomConference = model('');
  dateConference = model('');
  locationConference = model('');
  descriptionConference= model('');
  maxparticipantsConference=model('');
  nbparticipantsConference= model('');

  confA = output<Conference>();

  AjouterConference() {
    const newConference: Conference = {
      name: this.nomConference(),
      date: this.dateConference(),
      location: this.locationConference(),
      description: this.descriptionConference(),
      maxParticipants: Number(this.maxparticipantsConference()),
      nbParticipants: Number(this.nbparticipantsConference())
    };

    this.confA.emit(newConference);
    this.nomConference.set('');
    this.dateConference.set('');
    this.locationConference.set('');
    alert('Conférence ajoutée: ' + newConference.name);
  }
}

