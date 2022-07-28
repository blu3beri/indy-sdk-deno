import { IndyError } from "../IndyError.ts"

type Argument = Record<string, unknown> | Array<unknown> | Uint8Array | number | any

export const serialize = (arg: Argument) => {
  switch (typeof arg) {
    case "string":
      return arg
    case "number":
      return arg
    case "function":
      return arg
    case "object":
      return Deno.UnsafePointer.of(new TextEncoder().encode(`${JSON.stringify(arg)}\0`))
    default:
      throw new IndyError({ number: 1, message: `Could not serialize: ${arg}` })
  }
}

export const serializeArguments = (...args: Array<Argument>) => args.map(serialize)
