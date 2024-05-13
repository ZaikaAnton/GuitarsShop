// Создаем class Shopping. В нем должно рендерится, то что вы положили в корзину.Когда мы будем нажимать на кол-во товаров, будет открываться корзина с выбранными товарами.
// Когда мы будем нажимать на кол-во товаров, будет открываться корзина с выбранными товарами.
// При чем информация должна быть name и price, отбриать рендер мы можем по id. Картинку рендерить не нужно.
class Shopping {
  // Функция обработчика событий для кнопки закрытия корзины. При нажатие на крестик, корзина будет закрываться.
  handleClear() {
    // Это делается так, то есть по сути мы все, что было добавлено в div, который содержит наше верстку с нашей корзиной стираем. Присваивает ей ''.
    // И так получается, раз ее нет, то отображать и нечего. То есть можно сказать, что метод render, который ниже, мы обнулили.
    // Но если снова нажнем на кол-во товаров, то он появится снова
    ROOT_SHOPPING.innerHTML = "";
  }
  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";
    let sumCatalog = 0;

    CATALOG.forEach(({ id, name, price }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlCatalog += `
          <tr>
            <td class='shopping-element__name'>🤚 ${name}</td>
            <td class='shopping-element__price'>${price.toLocaleString()} BTC</td>
          </tr>
        `;
        sumCatalog += price;
      }
    });

    const html = `
      <div class='shopping-container'>
        <div class='shopping__close' onclick='shoppingPage.handleClear();'></div>
        <table>
          ${htmlCatalog}
          <tr>
            <td class='shopping-element__name'>Общая сумма:</td>
            <td class='shopping-element__price'>${sumCatalog.toLocaleString()} BTC</td>
          </tr>
        </table>
      </div>
    `;
    ROOT_SHOPPING.innerHTML = html;
  }
}

const shoppingPage = new Shopping();
// console.log(productsStore);
