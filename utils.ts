import { IndyError } from "./IndyError.ts"
import { COMMAND_HANDLE, ERROR_CODE, I32, STRING } from "./ffi/primitives.ts"

export const wrapIndyCallback = (cb: (...args: any[]) => any, mapResponse: any) => {
  let promise
  if (!cb) {
    promise = new Promise(function (resolve, reject) {
      cb = function cb(err, data) {
        if (err) reject(err)
        else resolve(data)
      }
    })
  }
  const callback = (err: any, data: any) => {
    if (err) {
      cb(new IndyError(err))
      return
    }
    if (mapResponse) {
      data = mapResponse(data)
    }
    cb(null, data)
  }
  callback.promise = promise
  return callback
}

export const toJson = (val: any) => {
  if (val === null || val === undefined) {
    return null
  }
  if (typeof val === "string") {
    return val
  }
  return JSON.stringify(val)
}

export const fromJson = (val: any) => {
  if (typeof val === "string" && val !== "") {
    try {
      return JSON.parse(val)
    } catch (e) {}
  }
  return val
}

export const promisifyWithSingleStringResponse = (method: (...args: any[]) => void): Promise<string> => {
  return new Promise((resolve, reject) => {
    const cb = new Deno.UnsafeCallback(
      { parameters: [COMMAND_HANDLE, ERROR_CODE, STRING], result: "void" } as const,
      (_: number, err: number, response: bigint) => {
        if (err) reject(err)
        const responseString = new Deno.UnsafePointerView(response).getCString()
        resolve(responseString)
      }
    )
    method(cb.callback)
  })
}

export const promisifyWithSingleNumberResponse = (method: (...args: any[]) => void): Promise<number> => {
  return new Promise((resolve, reject) => {
    const cb = new Deno.UnsafeCallback(
      { parameters: [COMMAND_HANDLE, ERROR_CODE, I32], result: "void" } as const,
      (_: number, err: number, response: number) => {
        if (err) reject(err)
        resolve(response)
      }
    )
    method(cb.pointer)
  })
}
