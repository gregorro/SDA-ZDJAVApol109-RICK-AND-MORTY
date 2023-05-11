import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getIdByLink'
})
export class GetIdByLinkPipe implements PipeTransform {

  transform(link: string, ...args: unknown[]): string {
    const segmentArray: string[] = link.split('/')
    return segmentArray[segmentArray.length-1]
  }

}
