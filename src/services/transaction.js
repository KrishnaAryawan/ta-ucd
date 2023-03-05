import theyardAxios from "./_init";

export async function PostTransaction(data) {
  return await theyardAxios.post("/transaction", data);
}
