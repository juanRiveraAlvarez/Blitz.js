import {HttpMethod} from '../type/HttpMethod';

export interface Route{
  path: string;
  method: HttpMethod;
  callback: string;
}
