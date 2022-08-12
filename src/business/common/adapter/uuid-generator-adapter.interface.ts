export default interface IUuidGeneratorAdapter {
  generate(): Promise<string>;
}
