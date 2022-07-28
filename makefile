run:
	rm -rf ~/.indy_client
	/usr/local/bin/deno run --allow-ffi --unstable --allow-env mod.ts

get-names:
	nm /usr/local/lib/libindy.dylib | rg  " _indy"
