module.exports = function(credentials) {
  var twit = require('twit')
  var t = new twit(credentials)

  return {
    on: function(keywords, callback) {
      var track = keywords.split(',')
      var stream = t.stream('statuses/filter', { track: track })
      stream.on('tweet', function(tweet) {
        var status = callback(tweet.user.screen_name, tweet.text)
        console.log(status)
//        t.post('statuses/update', { status: status, in_reply_to_status_id: tweet.id_str })
      })
    }
  }
}
