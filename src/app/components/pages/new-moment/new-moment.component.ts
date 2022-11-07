import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/moment';
import { MomentService } from 'src/app/services/moment.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';


@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {

  btnText = "Compartilhar!"

  constructor(
    private momentService: MomentService, 
    private _snackBar: MatSnackBar,
    private router: Router

    
    ) { }

  ngOnInit(): void {
  }

  createHandler(moment : Moment){

    const formData = new FormData();

    formData.append("title",moment.title)
    formData.append("description",moment.description)
    formData.append("image",moment.image)

    this.momentService.createMoment(formData).subscribe(()=>{
      this._snackBar.open('Moment inserido com sucesso', '', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 3000,
        panelClass: ['blue-snackbar']
      });

      this.router.navigate(['/'])
    })

    


  }

}
