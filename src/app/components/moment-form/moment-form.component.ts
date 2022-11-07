import { Moment } from 'src/app/moment';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Moment>();
  @Input() btnText!: string
  @Input() momentData : Moment | null = null

  formMoments!: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.formMoments = this.fb.group({
      id: [this.momentData ? this.momentData.id : '',[]],
      title: [this.momentData ? this.momentData.title : '',[Validators.required]],
      description: [this.momentData ? this.momentData.description : '',[Validators.required, Validators.minLength(10)]],
      image: [''],  
    })

  }

  onFileSelected(e: any){


    this.formMoments.patchValue({ image: e.target.files[0] });
    console.log(this.formMoments)
  }

  submit(){
    if(this.formMoments.invalid) return
    // console.log(this.formMoments.value)

    this.onSubmit.emit(this.formMoments.value)
  }



}
