class DataSource {
  static searchPlant(keyword) {
    async function searchPlant() {
      try {
        const response = await fetch(`https://trefle.io/api/v1/plants/search?token=kjH8RAMUJQJCLGVCBY3BGlv47ponaj1rm0APxyZpYL4&q=${keyword}`);
        const result = await response.json();
        return result.data;
      } catch (error) {
        console.error('Failed to fetch data from API:', error);
        throw new Error('Failed to fetch data from API');
      }
    }
    return searchPlant();
  }
}

export default DataSource;