import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
id:string="";
task:any;
constructor(private route: ActivatedRoute) {}
ngOnInit()
{
  this.id = this.route.snapshot.paramMap.get("id") || "";
  let tasks=JSON.parse(localStorage.getItem("tasks") ||"");
  let i=parseInt(this.id)
  this.task=tasks[i];
}
}
