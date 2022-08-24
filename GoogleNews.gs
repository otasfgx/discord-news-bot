function newGoogleNews(rss_api_url, word){
  const googleNews = new GoogleNews(rss_api_url, word);
  return googleNews.getGoogleNews();
}

class GoogleNews {
  constructor(rss_api_url, word){
    this.rss_api_url = rss_api_url;
    this.word = word;
  }

  getGoogleNews(){
    const payload = {
    'word': this.word,
    };

    const options = {
      'method': 'post',
      'payload': payload
    }

    const response = UrlFetchApp.fetch(this.rss_api_url,options);
    const json = JSON.parse(response);
    const news = json[0]["link"];
    return news;
  }
}