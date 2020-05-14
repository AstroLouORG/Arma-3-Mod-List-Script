const fs = require("fs")

let path = ("Arma 3 Server Path") // Change this path, to the Server Folder, where the mod folders are located.

let array = fs.readdirSync(path)
let names = array.filter(name => name.startsWith("@"))
    fs.writeFileSync('modlist.txt', names.join(';'))

console.log(`SUCCESS: modlist.txt Successfully Created in ${path}`)

// Install node.js on your PC. Then run this script with "node ModScript.js"
// It will create a file called "modlist.txt" to the path that you have given it.
// Done! Just copy the text from that file into the start.bat file from your server into the
// mods parameter and you're done. Don't forget to move the keys though!
