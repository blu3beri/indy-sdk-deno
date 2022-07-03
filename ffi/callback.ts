export const enabledCallback = new Deno.UnsafeCallback(
  {
    parameters: ["pointer", "u32", "pointer"],
    result: "void",
  } as const,
  (context: BigInt, level: number, target) => {
    console.log(context, level, target)
  }
)

export const logCallback = (
  cb: (level: number, target: string, message: string, modulePath: string, file: string, line: number) => void
) =>
  new Deno.UnsafeCallback(
    {
      parameters: ["pointer", "u32", "pointer", "pointer", "pointer", "pointer", "u32"],
      result: "void",
    } as const,
    (_: bigint, level: number, target: bigint, message: bigint, modulePath: bigint, file: bigint, line: number) => {
      const targetString = new Deno.UnsafePointerView(target).getCString()
      const messageString = new Deno.UnsafePointerView(message).getCString()
      const modulePathString = new Deno.UnsafePointerView(modulePath).getCString()
      const fileString = new Deno.UnsafePointerView(file).getCString()
      cb(level, targetString, messageString, modulePathString, fileString, line)
    }
  )

export const flushCallback = new Deno.UnsafeCallback(
  {
    parameters: ["pointer"],
    result: "void",
  } as const,
  (context: BigInt) => {
    console.log(context)
  }
)
