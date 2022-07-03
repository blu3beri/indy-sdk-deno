import { indy } from "./indy.ts"
import { library, enabledCallback, flushCallback, logCallback } from "./ffi/mod.ts"

// library.symbols.setLoggerWithMaxLvl(
//   new Uint8Array(1),
//   enabledCallback.pointer,
//   logCallback(console.log).pointer,
//   flushCallback.pointer,
//   5
// )

indy
  .openWallet({ id: "11111111111111111111111111111111" }, { key: "22222222222222222222222222222222" })
  .then((a) => console.log("res", a))
  .catch((e) => console.error("err", e))
