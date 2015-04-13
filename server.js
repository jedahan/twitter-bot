var credentials = require('./credentials.json')
var bot = require('./lib/bot.js')(credentials)

bot.on("sfpc, sfpc.io", (username, text) => {
  return "Hello comrade @" + username
})
