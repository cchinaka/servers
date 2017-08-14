import { SERVER } from './models/server';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServersService {

  constructor(private http: Http) {
    console.warn('yes...http is not being used at the moment...');
  }

  findServerInfo() {
    return Observable.of(SERVER);
  }
}
