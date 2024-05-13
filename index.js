// В этом файле будут рендерится стартовые компоненты.
// Такие как Header и Products
// Теперь получается, что рендерн каждого файла, происходит из общего файла
function render() {
  // Эти 3 строчки рендерят Header
  const productsStore = localStorageUtil.getProducts();
  const count = productsStore.length;
  headerPage.render(count);

  //   Эта строчка рендерит Products
  productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

fetch("server/catalog.json")
  .then((result) => result.json())
  .then((file) => {
    CATALOG = file;

    spinnerPage.handleClear();
    render();
  })
  .catch((error) => {
    spinnerPage.handleClear();
    errorPage.render();
  });

//   Обновлять браузер сере ctrl + shift + r
