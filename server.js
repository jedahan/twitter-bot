var credentials = require('./credentials.json')
var bot = require('./lib/bot.js')(credentials)

bot.on("sfpc, sfpc.io", (username, text) => {
  console.log(username + ": " + text)

  // If you return a string, your bot will chat. This will get you banned
  return "Hello comrade @" + username
})
