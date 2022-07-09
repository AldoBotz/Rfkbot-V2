// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to benni ismael
// thank you to zerochanBot
// thank you to fernazer
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// and thanks you to who support my Bot

gc1 = 'https://chat.whatsapp.com/BXRH5ApRnbaHm6ULbPuG4d'
gc2 = 'https://chat.whatsapp.com/BXRH5ApRnbaHm6ULbPuG4d'
gc3 = 'https://chat.whatsapp.com/BXRH5ApRnbaHm6ULbPuG4d'
global.linkGC = ['https://chat.whatsapp.com/BXRH5ApRnbaHm6ULbPuG4d', ''] // ganti jadi group lu
global.owner = ['6281317549796','6281564663825'] // Put your number here //owner eval
global.kontak = ['6281317549796'] //Ketika ada yang ngetik #owner
global.mods = ['6281564663825','6281317549796'] // Want some help?
global.prems = ['6281317549796','6281564663825'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://api.lolhuman.xyz': 'RFK-Rey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'RFK-Rey'
zekskey = 'apivinz'
xteamkey = 'Dawnfrostkey'
//xteam        MIMINETBOT
namaig = '-'
namagithub = 'RexxinOfficial'
kasihcaption = `github.com/RexxinOfficial
namakontak1 = 'Rexxin Official'
namakontak2 = 'Rexxin Official'

//kasihcaption = `Instagram.com/mursid.st`

// Sticker WM
global.packname = '' // ganti aja
global.author = 'Created By Rexxin' // ganti aja

//yyy
bc = 'Rexxin - MD' //мυяѕι∂ Broadcast
footer = `\n© _*Rexxin - MD*_`
namabot = `Rexxin - MD`
namalu = 'Rexxin Official'


// 
wait = '_*Loading...*_'
global.wait = '_*Loading...*_'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/BXRH5ApRnbaHm6ULbPuG4d'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '_*Server Error kak*_'

global.image = "https://telegra.ph/file/eb55a0d3eb493a4349620.jpg"

// Ubah saja SC dari MursidXzy
global.image = 'https://telegra.ph/file/eb55a0d3eb493a4349620.jpg'//thumbnail

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 69 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
