// Создаем класс Products
class Products {
  constructor() {
    this.classNameActive = "products-element__btn_active";
    this.labelAdd = "Это РОК БЕРУУУУ";
    this.labelRemove = "Это не РОК не беру";
  }

  // Создаем обработчик событий и вешаем его на кнопку <button> (onclick='productsPage.handelSetLocationStorage()')
  // productsPage.handelSetLocationStorage(), а не handelSetLocationStorage, так как обработчик записан в классе и его нужно вызвать с класса
  handelSetLocationStorage(element, id) {
    const { pushProducts, products } = localStorageUtil.putProducts(id);
    // тут формируем две константы при помощи диструкторизации pushProducts(тут булево, оно меняется при добавление id в products) и products(тут сам объект с id).
    // Если pushProducts(true) - то значит id добавлено в LocalStorage и значит мы меняем оформление кнопки.
    // Если нет, мы убираем id из LocalStorage ( то есть убирай с корзины, то меняем оформление кнопки на первоночальное)
    if (pushProducts) {
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;
    } else {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
    }

    // Ты мы ренедерим header с учетом изменения длины массива (поэтому и меняется count в реал тайме)
    headerPage.render(products.length);
  }

  // 1) Создаем у этого класса метод .render
  // Этот метод должен будет рендерить наш каталог с catalog.js в браузер
  // 2) В forEach мы в качестве аргумента сделали деструктурицацию, чтоб все элементы выводились отдельно, а не как объекты.
  render() {
    // Тут мы получаем значение по ключу из LocalStorage
    const productsStore = localStorageUtil.getProducts();

    // В эту константу мы будем формировать наш html код для отображение каталога в браузере
    let htmlCatalog = "";
    CATALOG.forEach(({ id, name, price, img }) => {
      // Эти переменныен будут менять в зависимости от наличия итерируемого id в LocalStorage
      let activeClass = "";
      let activeText = "";

      if (productsStore.indexOf(id) === -1) {
        activeText = this.labelAdd;
      } else {
        activeText = this.labelRemove;
        activeClass = " " + this.classNameActive;
      }

      // Вот так на каждой итерации мы формируем 1 li из 1 товара
      htmlCatalog += `<li class='products-element'>
        <span class='products-element__name'>${name}</span>
        <img class='products-element__img' src='${img}' />
        <span class='products-element__price'>🤚 ${price.toLocaleString()} BTC<span>
        <button class='products-element__btn${activeClass}' onclick="productsPage.handelSetLocationStorage(this, '${id}');">${activeText}</button>
      </li>
      `;
    });

    // А вот тут мы запихиваем все наши li в ul
    const html = `
    <ul class='products-container'>
        ${htmlCatalog}
    </ul>
    `;

    // А тут мы все что у нас получилось засовываем в тег div, у которого id='products'
    //ROOT_PRODUCTS - мы создали в файлу root.js/ innerHTML - это то, что содержит тег внутри себя.
    // Это тег div, у которого id='products' - у ничего ничего нет, поэтому мы присваиваем туда наш каталог, который рендерим.
    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
