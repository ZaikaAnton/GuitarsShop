// В этом классе будут храниться те вещи, которые были выбраны в корзину.
class LocalStorageUtil {
  constructor() {
    this.keyName = "products";
  }

  //   Получает значение товара
  //   localStorage.getItem() - встроенные мето getItem и localStorage тоже встроен в Js
  getProducts() {
    // Тут присваивается ключ, "products", по которому получается значение этого ключа.
    //  В данном случае это будет массив, т.к у нас возвращается []
    // Это будет какой-нибудь массив, но в строковом типе.
    const productLocalStorage = localStorage.getItem(this.keyName);
    if (productLocalStorage !== null) {
      // Поэтому тут это все парсится из строку в формат JSON
      return JSON.parse(productLocalStorage);
    }
    // Массив возвращается при первом вызове, когда productLocalStorage равен ничему.
    return [];
  }

  // Добавляет товар в LocalStorage
  //   Ну а тут добавляет само id в [], на который ссылается productLocalStorage
  //   Плюс тут реализовано, что если id уже есть в [], то при повторном добавление, он удаляется
  putProducts(id) {
    // Тут мы получаем все значение из localStorage при помощи метода getProducts()
    let products = this.getProducts();
    let pushProducts = false;
    const index = products.indexOf(id); // Узнаем индекс id, если оно есть в product

    if (index === -1) {
      //Если нет, то добавляем  его
      products.push(id);
      pushProducts = true;
    } else {
      //Если есть, то удаляем его
      products.splice(index, 1);
    }
    // Ну а тут под нашим ключам записываем весь products, который у нас получился, и форматируем его обратно в строку
    localStorage.setItem(this.keyName, JSON.stringify(products));

    return { pushProducts, products };
  }
}

const localStorageUtil = new LocalStorageUtil();
// console.log(localStorageUtil.getProducts());

// localStorageUtil.putProducts("el1");
// localStorageUtil.putProducts("el2");
// localStorageUtil.putProducts("el3");
// localStorageUtil.putProducts("el4");
// localStorageUtil.putProducts("el5");
