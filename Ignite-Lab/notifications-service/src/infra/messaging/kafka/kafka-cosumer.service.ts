import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['usable-vervet-6010-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'dXNhYmxlLXZlcnZldC02MDEwJMDbgkr7b7z4YC8OpkJT51uaNVUY0jv3huJ-wRs',
          password:
            'mBUyT-Tg920Aqo6tJBmeXlAEBg0RWpzGDNszA9mCVOPkg7W5k_M_iqSgY4N1riVNzfcAuw==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
