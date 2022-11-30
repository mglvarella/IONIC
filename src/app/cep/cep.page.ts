import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.page.html',
  styleUrls: ['./cep.page.scss'],
})
export class CEPPage implements OnInit {

  cep: string = "";
  estado: string = "";
  cidade: string = "";
  bairro: string = "";
  rua: string = "";
  

  constructor() { }
  ngOnInit() {}

  buscarEndereco(){
    if(this.cep == ""){
      alert("Erro!\nNenhum CEP foi inserido")
      return;
    }
    let url = "https://viacep.com.br/ws/" + this.cep + "/json/";
    console.log(url)

    fetch(url)
    .then(function(resposta){
      return resposta.json();
    })
    .then((json) =>{
      this.estado = json.uf;
      this.cidade = json.localidade;
      this.bairro = json.bairro;
      this.rua = json.logradouro;
    });

  }

}
