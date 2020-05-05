import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.scss']
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contarTres().then(mensaje => console.log("Termino ", mensaje))
    .catch(error => console.error("Error en la promesa ", error));


  }

  ngOnInit() {
  }

  contarTres() {
    let promesa = new Promise((resolve, reject) => {
      let contador = 0;

      let intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve('OK')
          //reject('Simplemente un error');
          clearInterval(intervalo);
        }
      }, 1000);
    });

    return promesa;    
  }
}
