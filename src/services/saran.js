import abhisAxios from "./_init";

export async function PostSaran(data) {
  return await abhisAxios.post("/saran", data);
}
