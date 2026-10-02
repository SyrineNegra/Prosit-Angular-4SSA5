import { Component, input, model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conference-ajouter',
  imports: [FormsModule],
  templateUrl: './conference-ajouter.html',
  styleUrl: './conference-ajouter.css',
})
export class ConferenceAjouter 
{
nomConference= model<string>();


/*
dateConference=input<any>();
locationConference=input<any>();
*/
  AjouterConference()
  {
        alert('Conférence ajoutée:');
    //this.nomC.set(this.name());
  }
}
