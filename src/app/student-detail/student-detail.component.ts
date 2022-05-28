import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  id: number;
  public students;

  constructor(
    private serverHttp: ServerHttpService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getDetailStudent(this.id);

  }
  private getDetailStudent(id){
    this.serverHttp.getStudent(id).subscribe((data) => {
      this.students = data;
  });
  }

}
