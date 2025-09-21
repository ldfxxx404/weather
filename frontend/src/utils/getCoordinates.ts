import { COORDINATES_URL } from "@/constants";
import { CoordinatesResponse } from "@/types/responseTypes";

export default async function getCoordinates(
  city: string,
): Promise<CoordinatesResponse | null> {
  try {
    const response = await fetch(COORDINATES_URL.replace("${city}", city));
    if (!response.ok) {
      throw new Error("Network error");
    }
    const data = await response.json();
    if (!data.results || data.results.length === 0) {
      throw new Error("City not found, please try another city");
    } else {
      const { latitude, longitude } = data.results[0];
      localStorage.setItem(
        "coordinates",
        JSON.stringify({ latitude, longitude }),
      );
      console.log(latitude, longitude);
      return { latitude, longitude };
    }
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    return null;
  }
}
