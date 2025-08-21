import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyexchange'
})
export class CurrencyexchangePipe implements PipeTransform {

  transform(value:number, ...args: number[ ]): unknown {

 console.log(args)

 let [data]=args

 if(args.length>0){
  let [data]=args
  return value*data
 }else{
  return value*85
 }

  }

}
