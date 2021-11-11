const END_POINT = "https://api.coinpaprika.com/v1";

export function fetchCoinAPI(this: string) {
  return fetch(`${END_POINT}/${this}`).then((res) => res.json());
}

export function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;

  return fetch(
    `${END_POINT}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then((res) => res.json());
}
