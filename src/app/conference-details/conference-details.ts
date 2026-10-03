import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'tr[app-conference-details]',
  imports: [],
  templateUrl: './conference-details.html',
  styleUrl: './conference-details.css',
})
export class ConferenceDetails {
conference = input<any | null>(null);
  today= new Date();
  
nbPlacesRestantes = computed(() => {
    const conf = this.conference();
    return conf.maxParticipants - conf.nbParticipants;
  });
  
  
  dateConf = computed(() => {
  const conf = this.conference();
  if (!conf?.date) return false;
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const confDate = new Date(conf.date);
  return confDate > today;
});
}
