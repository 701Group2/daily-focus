const NEWS_API_KEY = "91e24cff34754f14aae4b9eaf858855d";

export const getArticles = async (topic, country) => {
    const response = await fetch(
        `https://newsapi.org/v2/top-headlines?category=${topic}&country=${country}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
    );
    const json = await response.json();

    return json.articles;
};
