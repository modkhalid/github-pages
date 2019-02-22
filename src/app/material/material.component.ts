import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  constructor() { }
  isChecked = false;

  ngOnInit() {
  }
  onChange(event) {
    console.log(event.checked);
  }

}
