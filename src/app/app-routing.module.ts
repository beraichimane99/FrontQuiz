import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationCardComponent } from './components/authentification-card/authentification-card.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
const routes: Routes = [
  { path: 'authentification', component: AuthentificationCardComponent },
  { path: 'quiz', component: QuestionCardComponent} ,
   /* children: [
      
     ]},*/
 // { path: 'quiz', component: QuestionCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
