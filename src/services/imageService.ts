const PEXELS_API_KEY = process.env.EXPO_PUBLIC_PEXELS_API_KEY;

export async function getCityImage(city: string) {
  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(
        city
      )}&per_page=1`,
      {
        headers: {
          Authorization: PEXELS_API_KEY ?? "",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Pexels API hatası");
    }

    const data = await response.json();

    if (data.photos?.length > 0) {
      return data.photos[0].src.landscape;
    }

    return null;
  } catch (error) {
    console.log("Resim alınamadı:", error);
    return null;
  }
}