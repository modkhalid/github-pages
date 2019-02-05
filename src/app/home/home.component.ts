import { ListService } from './../list.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('animation_name', [
      transition('void=>*', [
        style({backgroundColor: 'red', opacity: 0}),
        animate(2000)
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {
  constructor(private fb: FormBuilder, private service: ListService) {
    this.posts = service.list();
  }
  posts;
  navbarOpen = false;

  ngOnInit() {
  }
  fun = ( var_name: HTMLInputElement) => {
    // console.log(var_name.value);

    this.posts.splice(0, 0, var_name.value);
    var_name.value = '';
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
