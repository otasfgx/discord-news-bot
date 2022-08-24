const PROJECT_PROP = PropertiesService.getScriptProperties().getProperties();

function main(){  
  const news = newGoogleNews(PROJECT_PROP.RSS_API_URL, "脆弱性");
  Logger.log(news);
  notifyDiscord(PROJECT_PROP.WEBHOOK_URL, news);
  setTrigger("main",12,00);
}