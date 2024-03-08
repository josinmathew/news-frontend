const articlesUrl = "/news-data.json";

export const fetchArticles = async () => {
  try {
    const response = await fetch(articlesUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch articles");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

export const fetchArticleById = async (id) => {
  try {
    const response = await fetch(articlesUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch article");
    }
    const data = await response.json();
    const currentArticle = data.find((item) => item.id == id);
    return currentArticle;
  } catch (error) {
    console.error("Error fetching article:", error);
    throw error;
  }
};
