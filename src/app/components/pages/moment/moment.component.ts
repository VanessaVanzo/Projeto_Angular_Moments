import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moment } from 'src/app/moment';
import { MomentService } from 'src/app/services/moment.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Coment } from 'src/app/coment'
import { FormBuilder, FormGroup, Validators,FormGroupDirective } from '@angular/forms';
import { ComentService } from 'src/app/services/coment.service';



@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {

  moment?: Moment
  comentForm!: FormGroup

  constructor(
    private momentService: MomentService,
    private comentService: ComentService,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private fb: FormBuilder) { }



  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService
      .getMoment(id)
      .subscribe((item) => {
        this.moment = item.data
      })


    this.comentForm = this.fb.group({
      text: ['', [Validators.required]],
      username: ['', [Validators.required]],
    })

  }

  delete(id: number) {
    this.momentService.deleteMoment(id)
      .subscribe({

        next: () => {
          this._snackBar.open('Moment Excluído com sucesso', '', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 3000,
            panelClass: ['blue-snackbar']
          });

          this.router.navigate(['/'])

        },
        error: (err) => {
          this._snackBar.open('Não foi possível excluir', '', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 3000,
            panelClass: ['red-snackbar']
          });
        },
      });

  }

  submit(formDirective: FormGroupDirective){
    
    if(this.comentForm.invalid) return

     const data: Coment = this.comentForm.value
     data.momentId = Number(this.moment!.id)

    this.comentService.createComent(data).subscribe((coment) => {
      this.moment!.comments!.push(coment.data)
      this._snackBar.open('Comentário Inserido com sucesso', '', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 3000,
        panelClass: ['blue-snackbar']
      });

      this.comentForm.reset();
      formDirective.resetForm();


    })
  }


}
