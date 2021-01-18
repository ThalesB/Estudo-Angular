import{ Imprimivel } from '../models/index';

export function imprime(...objeto: Imprimivel[]){

  objeto.forEach(objeto => objeto.paraTexto());


}