import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {


  }
detalhesFilme(){

  this.router.navigate(['/detalhes-filme'])

}
}
