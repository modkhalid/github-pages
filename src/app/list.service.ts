import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  list() {
    return ['amna', 'dskjfhsdkjghkjd', 'skjfhdskjhgkdjg'];
  }
}
