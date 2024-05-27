import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getClient(body): string {
    return `Nouveau client :  ${body.name}`;
  }

  postClient(body): string {
    return `New client :  ${body.name}`;
  }
}
