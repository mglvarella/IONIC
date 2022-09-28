import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-filme',
  templateUrl: './detalhes-filme.page.html',
  styleUrls: ['./detalhes-filme.page.scss'],
})
export class DetalhesFilmePage implements OnInit {

  constructor(private router: Router) {


   }
   
   home(){

    this.router.navigate(['/home'])
  
  }

  ngOnInit() {
  }

}
