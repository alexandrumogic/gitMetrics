import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommitsService {

  constructor(private http: Http) { }

  getAllCommits() {
    return this.http.get('/api/posts').map(res => res.json());
  }

}
