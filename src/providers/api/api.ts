import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios'

// import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  // url: string = 'https://example.com/api/v1';
  url: string = 'http://195.133.146.21:3000';
  // url: string = 'http://localhost:3000';

  token: any;
  
  constructor(public http: HttpClient, public storage: Storage) {
  }

  async login(credentials){
    var res: any = await axios.post(`${this.url}/login`, credentials)
    this.token = res.data.token;
    this.storage.set('token', res.data.token);
    return res
    // return new Promise((resolve, reject) => {
    //     let headers = new HttpHeaders();
    //     headers.append('Content-Type', 'application/json');
    //     debugger
    //     this.http.post(`${this.url}/login`, JSON.stringify(credentials), {headers: headers})
    //       .subscribe(res => {
    //         debugger
    //         let data = res.json();
    //         this.token = data.token;
    //         this.storage.set('token', data.token);
    //         resolve(data);
    //         resolve(res.json());
    //       }, (err) => {
    //         debugger
    //         reject(err);
    //       });
    // });
  }
 
  async get(endpoint: string, params?: any, reqOpts?: any) {
        // if (!reqOpts) {
        //   reqOpts = {
        //     params: new HttpParams()
        //   };
        // }

        // // Support easy query params for GET requests
        // if (params) {
        //   reqOpts.params = new HttpParams();
        //   for (let k in params) {
        //     reqOpts.params.set(k, params[k]);
        //   }
        // }

        var opts = {
          url: `${this.url}/api/${endpoint}`,
          method: 'GET',
          headers: {'Authorization': this.token}
        }
        return await axios(opts)
        // return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

  postHttp(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  async post(endpoint: string, body: any, reqOpts?: any) {
    var opts = {
      url: `${this.url}/api/${endpoint}`,
      method: 'POST',
      data: body,
      json: true,
      headers: {'Authorization': this.token}
    }
    return await axios(opts)
    // return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }
}
