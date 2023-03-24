import theyardAxios from "./_init";

export async function PostTransaction(data) {
  return await theyardAxios.post("/transaction", data);
}
export async function PostTransactionWithoutID(data) {
  return await theyardAxios.post("/transaction-withoutId", data);
}
