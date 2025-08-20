/*
Реализовать список валют в виде таблицы
Таблица должна содержать 3 колонки: ID, ASSET, PRICE

Для получения ID, ASSET использовать запрос http: https://margex.com/client-payment/api/v1/collateral;

Где приходит массив data, содержащий нужные нам параметры: id, asset

Для получения PRICE необходимо подключиться к веб сокету:
wss://margex.com/client-last-trade/last

Где будет приходить сообщение - объект с полями s и p
Где s - ID, а p - PRICE

*/

import { AssetsTable } from "./ui";

export const AssetPage = () => {
  return <AssetsTable />;
};
