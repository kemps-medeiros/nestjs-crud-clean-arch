import { Module } from '@nestjs/common';
import UuidGeneratorAdapter from '../../../infrastructure/adapter/uuid-generator.adapter';
import { IdentifierGeneratorServiceToken } from '../token/app.token';

const providers = [
  {
    provide: IdentifierGeneratorServiceToken,
    useFactory: () => new UuidGeneratorAdapter(),
  },
];

@Module({
  providers: [...providers],
  exports: [...providers],
})
export default class UuidGeneratorModule {}
