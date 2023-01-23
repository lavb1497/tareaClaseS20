import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users:any = [];

  constructor( private traerUsuarios:ApiService){}

  ngOnInit(): void {
    this.traerUsuarios.getMostrar().subscribe(
      res => {
        console.log(res)
        this.users = res
        }, err => {

      }
    );
  }

  buttonMostrar:string = "Mostrar"
  mostrar:boolean = false;

  mostrarUsuarios(){
    if (this.mostrar){
      this.mostrar = false;
      this.buttonMostrar = "Mostrar"
    } else {
      this.mostrar = true;
      this.buttonMostrar = "Ocultar"
    }
  }
}
