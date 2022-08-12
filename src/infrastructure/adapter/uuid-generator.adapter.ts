import IUuidGeneratorAdapter from 'src/business/common/adapter/uuid-generator-adapter.interface';
import { v4 as newUuid } from 'uuid';

export default class UuidGeneratorAdapter implements IUuidGeneratorAdapter {
  async generate(): Promise<string> {
    return newUuid();
  }
}
