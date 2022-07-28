//import { enabledCallback, logCallback, flushCallback } from "./ffi/callback.ts"
import { enabledCallback, logCallback, flushCallback } from "./ffi/callback.ts"
import { library } from "./ffi/library.ts"
import { indy } from "./indy.ts"

//library.symbols.setLoggerWithMaxLvl(
//  new Uint8Array(1),
//  enabledCallback.pointer,
//  logCallback(console.log).pointer,
//  flushCallback.pointer,
//  5
//)

const run = async () => {
  //await indy.createWallet({ id: "a" }, { key: "a" }).catch(console.error)
  const wh = await indy.openWallet({ id: "a" }, { key: "a" })
}

run()

await new Promise((r) => setTimeout(r, 1000))
