import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{


  constructor(){}
  ngOnInit(): void {
  }
    course=[
      
      {'id':1,'name':'Learn Angular','decription':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/angular.png'},
      {'id':2,'name':'Learn Typescript','decription':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/typescript.png'},
      {'id':3,'name':'Learn NodeJs','decription':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/nodejs.jpeg'},
      {'id':4,'name':'Learn SpringBoot','decription':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/springboot.webp'},


    ]
}
