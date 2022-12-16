import { Kafka } from 'kafkajs';
import { randomUUID } from 'node:crypto';

async function bootstrap() {
  const kafka = new Kafka({
    clientId: 'kafka-producer',
    brokers: ['usable-vervet-6010-us1-kafka.upstash.io:9092'],
    sasl: {
      mechanism: 'scram-sha-256',
      username:
        'dXNhYmxlLXZlcnZldC02MDEwJMDbgkr7b7z4YC8OpkJT51uaNVUY0jv3huJ-wRs',
      password:
        'mBUyT-Tg920Aqo6tJBmeXlAEBg0RWpzGDNszA9mCVOPkg7W5k_M_iqSgY4N1riVNzfcAuw==',
    },
    ssl: true,
  });

  const producer = kafka.producer();

  await producer.connect();
  await producer.send({
    topic: 'notifications.send-notification',
    messages: [
      {
        value: JSON.stringify({
          content: 'Nova solicitação de amizade! kafka-producer',
          category: 'social',
          recipientId: randomUUID(),
        }),
      },
    ],
  });

  await producer.disconnect();
}

bootstrap();
