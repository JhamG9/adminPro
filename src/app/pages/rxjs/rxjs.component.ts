import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    this.subscription = this.regresaObservable()
      .subscribe(
        numero => console.log("Subs ", numero),
        error => console.error("Error en el obs ", error),
        () => console.log("El observador termino ")
      );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

  regresaObservable(): Observable<any> {
    return new Observable(observer => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador++;

        const salida = {
          valor: contador
        }

        observer.next(salida);
        /*  if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        } */

      }, 1000);
    }).pipe(
      map((resp: any) => resp.valor),
      filter((valor, index) => {
        return true;
      })
    )

  }
}
