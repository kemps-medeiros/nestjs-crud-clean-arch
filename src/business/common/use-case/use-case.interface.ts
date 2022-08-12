export default interface IUseCase<Input, Output> {
  execute(input: Input): Promise<Output>;
}
