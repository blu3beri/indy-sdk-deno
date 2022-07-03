/**
 * @todo: handle permission
 */
export const load = () => Deno.env.get("LIBINDY_PATH") ?? "/usr/local/lib/libindy.dylib"
