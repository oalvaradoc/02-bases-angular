import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getPosts(){
    return this.http.get('http://jsonplaceholder.typicode.com/posts')
    .pipe( tap(console.log));
    // .pipe(
    //   tap( posts => {
    //     console.log(posts);
    //   })
    // );
    // return this.http.get('localhost:8090/api/productos/listar');
    // return this.http.get('/api/productos/listar');
  }


}
