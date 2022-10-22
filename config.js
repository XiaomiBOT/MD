/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9',
}

// Other
global.owner = ['6285770190255','6285779150501','6285770190255']
global.pemilik = ['6285822347348']
global.premium = ['6285822347348']
global.pengguna = 'HanzOfc'
global.botnma = 'XiaomiBotzMD'
global.footer = 'XiaomiBotzMD' //FooterText Biar Di Bawah Nya Ada Text 
global.web = 'https://youtu.be/uYCHtg0sUkE' // Ubah Sama Lu Web Nya Bebas 
global.web2 = 'https://chat.whatsapp.com/CxhaZtrxdn4AfSUOHuCtcM' //Ubah Jga Bebas Sama lu 
global.ganti = 'Y O U T U B E ME' //Edit Terserah Lu Mau Apa
global.ganti2 = 'Group Bot'
global.ownernma = 'HanzOfc'
global.packname = 'Sticker By'
global.author = 'HanzOfc'
global.sessionName = 'nahh'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Jadiin Gw Admin Dulu Tolol🗿!',
    owner: 'Lu Bukan _*Owner Gw Ajg🗿',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading Tod🗿...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./media/Lycho.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
