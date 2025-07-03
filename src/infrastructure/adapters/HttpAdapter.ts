import type * as http from 'http';
import {Server} from 'http';

import {HttpPort} from '../ports/HttpPort';

export class HttpAdapter implements HttpPort{

  #httpObject: typeof http;

  constructor(httpObject: typeof http){
    this.#httpObject = httpObject;
  }

  startServer(port:number):void{
      const http: Server = this.#httpObject.createServer((req, res)=>{
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello from Blitz.js');

      });

      http.listen(port, ()=>{
        console.log("Running blitz server");
      });

  }

}
