let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(image + 'donasi')).buffer(), `
╭──『 _*Donasi*_ 』──⬣
│⬡ Dana : *081317549796*
│⬡ Gopay : *081317549796*
│
│⬡ *_Pulsa_* :
│⬡ Telkomsel : *081317549796*
╰─────────⬣
╭─「 *NOTE* 」
│ > Owner? wa.me/6288233832771
│ _Hasil donasi akan digunakan buat keperluan bot_
╰──────────⬣
`.trim(), footer, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
