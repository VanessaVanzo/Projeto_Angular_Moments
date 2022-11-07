import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moment } from 'src/app/moment';
import { MomentService } from 'src/app/services/moment.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.css']
})
export class EditMomentComponent implements OnInit {

  moment! : Moment ;
  btnText: string = 'Editar'

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.momentService.getMoment(id).subscribe(response => {
      this.moment= response.data
      console.log(response.data)
    })
  }

  editHandler(moment: Moment){

    const formData = new FormData();

    formData.append("title",moment.title)
    formData.append("description",moment.description)

    if(moment.image)formData.append("image",moment.image)
    
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.momentService.updateMoment(id, formData).subscribe(() =>{
      this._snackBar.open('Moment alterado com sucesso', '', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 3000,
        panelClass: ['blue-snackbar']
      });

      this.router.navigate(['/'])
    })
  }

}
