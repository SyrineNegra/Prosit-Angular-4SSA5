import { Routes } from '@angular/router';

import { ConferenceListe } from './conference-liste/conference-liste';
import { Home } from './home/home';
import { ConferenceAjouter } from './conference-ajouter/conference-ajouter';
import { Erreur } from './erreur/erreur';

export const routes: Routes = [
{path:'home', component:Home},
{path:'conference-list', component:ConferenceListe},
{path:'conference-add', component:ConferenceAjouter},
{path:'', redirectTo:'home', pathMatch:'full'},
{path:'**', component:Erreur}

];
