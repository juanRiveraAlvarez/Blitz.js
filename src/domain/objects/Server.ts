import {HttpPort} from '../../infrastructure/ports/HttpPort';

export class Server{

  #httpPort: HttpPort;
  #port: number;

  constructor(httpPort: HttpPort, port: number){
    this.#httpPort = httpPort;
    this.#port = port;
  }

  start(): void{
    this.#httpPort.startServer(this.#port);
  }

}
