const END_POINT = "https://api.coinpaprika.com/v1";

export function fetchCoinAPI(this: string) {
  return fetch(`${END_POINT}/${this}`).then((res) => res.json());
}
