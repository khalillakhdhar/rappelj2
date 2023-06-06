import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  tasks:any // any est un type flexible sans initialisation
  name:string="";
  title:string="";
  time:any;
  constructor(private router: Router)
  {
    // méthode principale de construction du component
    // la bonne pratique est de l'utiliser pour la D.I
    console.log("hello from constructor")
  }
  ngOnInit(): void {
    // lecture et les initialisation
    if(localStorage.length==0)
    {
    let inittasks=[{ title: 'go to office',time:"8:00 PM" },{ title: 'start working',time:"9:00 PM" }];
    console.log("hello from init");
    localStorage.setItem('nom',"Khalil Lakhdhar");
    this.name=localStorage.getItem('nom') || ''; // if localStorage.getItem('nom') is undefined name=""

    localStorage.setItem("tasks",JSON.stringify(inittasks)) // convertir les taches et les stocker dans localstorage
    }
this.readTasks();
  }
  readTasks(): void {
    this.tasks=JSON.parse(localStorage.getItem('tasks') || ''); //


  }
  addTask(): void {
    let task={title:this.title,time:this.time};
    this.tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(this.tasks))
    this.title="";
    this.time=""

  }
  deconnect() {
localStorage.clear();
window.location.reload();
// window.location.replace("url");

  }
  goToSecond(id:any)
  {
    this.router.navigate(['../second',id]);
  }
}
