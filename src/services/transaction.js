import abhisAxios from "./_init";

export async function PostTransaction(data) {
  return await abhisAxios.post("/transaction", data);
}
