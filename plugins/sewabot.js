let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
┌〔 List Berlangganan 〕
├ 2 Bulan
├ 1 Bulan
├ 1 Minggu
├ 3 hari
└────
Silahkan klik pada "List Harga" untuk melihat list.

Pembayaran:
Pulsa (Telkom): 081317549796 (+2k)
Gopay: 081317549796
Dana: 081317549796
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '1 Minggu', description: "Rp5.000\nSewa bot selama 1 minggu", rowId:".masuk"},
        {title: '1 Bulan', description: "Rp8.000\nSewa bot selama 1 bulan.", rowId:".masuk"},
        {title: 'Permanen', description: "Rp12.000\nSewa bot permanen", rowId:".masuk"},
        {title: 'Premium', description: "Rp2.000\nBeli premium permanen", rowId:".masuk"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//Haruno Bot
