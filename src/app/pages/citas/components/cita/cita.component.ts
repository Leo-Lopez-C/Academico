import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CitaResponse } from '../../models/cita-response.interface';
import { CetiasService } from '../../services/cetias.service';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';

@Component({
  selector: 'app-cita',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './cita.component.html',
  styleUrl: './cita.component.scss'
})
export class CitaComponent implements OnInit {
citaData:CitaResponse[]=[];

  constructor(private _citaService:CetiasService){

  }


  ngOnInit(): void {
this.getCitas();
  }

  getCitas(){
    this._citaService.getCitas().subscribe((resp)=>{
      if(resp.success){
        this.citaData=resp.data;
        console.log("Data: ", this.citaData);
      }
    });
  }
}
