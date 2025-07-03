import {Server} from './domain/objects/Server';
import {HttpAdapter} from './infrastructure/adapters/HttpAdapter';
import http from 'http';

const httpAdapter = new HttpAdapter(http);
const server = new Server(httpAdapter, 3000);
server.start();
