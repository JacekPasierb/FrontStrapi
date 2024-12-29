import axios from "axios";
export const fetchPricings = async () => {
  try {
    const response = await axios.get("https://strapicmss-7315bed0e294.herokuapp.com/api/pricings");
    if (response.data && response.data.data) {
      return response.data.data;
    } else {
      throw new Error("Brak danych w odpowiedzi API");
    }
  } catch (err) {
    console.error("Błąd podczas pobierania danych:", err);
    throw new Error("Error fetching pricing data");
  }
};
