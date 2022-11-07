import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/moment';
import { MomentService } from 'src/app/services/moment.service';
// import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allMoments: Moment[] = [];
  moments: Moment[] = [];
  // baseApiUrl = environment.baseApiUrl

  constructor(private momentService: MomentService) { }

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) =>{
      const data = items.data

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR')
      })

      this.allMoments = data
      this.moments = data

    })
  }

  search(e : Event):void {
    console.log(e)
    const target = e.target as HTMLInputElement
    const value = target.value

    this.moments = this.allMoments.filter(m => {
      return m.title.toLowerCase().includes(value)
    })

  }

}
