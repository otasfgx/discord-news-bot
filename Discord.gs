function notifyDiscord(webhook_url, word){
  const discord = new Discord();
  discord.notify(webhook_url, word);
}

class Discord{
  constructor(){
  }

  notify(webhook_url,word){
    const payload = {
      username: "NewsBot",
      content:  word,
      tts: false,
    };

    const options = {
      method: 'post',
      headers: {'Content-type': "application/json"},
      payload: JSON.stringify(payload),
    }

    UrlFetchApp.fetch(webhook_url,options);
  }
}