import axios from "axios";

const getItemList = () => {
  let delayPromise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 2000);
  });

  return delayPromise.then(() => {
    return axios.get("/data/Items.json");
  });
};

const getItem = (itemId) => {
  let delayPromise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(itemId), 2000);
  });

  return delayPromise.then((id) => {
    return axios.get(`/data/items-elements/${id}.json`);
  });
};

export const ApiMock = {
  getItemList,
  getItem,
};
