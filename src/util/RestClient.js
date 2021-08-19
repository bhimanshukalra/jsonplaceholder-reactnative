export const httpPost = async (endpoint) => {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
      .then((response) => response.json())
      .then((json) => {
        resolve(json);
      })
      .catch((exception) => reject(exception));
  });
};
