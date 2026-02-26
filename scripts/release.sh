# setup release files for linux
deno task tauri build
cp ./src-tauri/target/release/memories-of-horizon ./release/linux 

# setup release files for windows
deno task tauri build --runner cargo-xwin --target x86_64-pc-windows-msvc
cp ./src-tauri/target/x86_64-pc-windows-msvc/release/memories-of-horizon.exe ./release/windows