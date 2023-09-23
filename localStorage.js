const getData = () => {
  const data = localStorage.getItem("favorite");
  if (data) {
    return JSON.parse(data);
  }
  return [];
};
const storeData = (id) => {
  const data = getData();
  const exist = data.find((data) => data === id);
  if (!exist) {
    data.push(id);
    localStorage.setItem("favorite", JSON.stringify(data));
  }
};
export { getData, storeData };
