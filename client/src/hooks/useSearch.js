// This hook processes the search query in the current category
// and returns the relevant results

function useSearch(data, searchInput) {
  const currentNews = data?.getFilteredNews?.results.filter(
    (news) => news.multimedia !== null && news?.title.length > 0
  );
  const filteredNews = currentNews?.filter((news) => {
    if (searchInput === "") {
      return news;
    } else {
      return (
        news.title.toLowerCase().includes(searchInput) ||
        news.abstract.toLowerCase().includes(searchInput)
      );
    }
  });

  return [filteredNews];
}

export default useSearch;
