// Создаем class Header. В нем мы формируем header в котором будет отображаться счетчик,
// который показывает сколько товаров добавлено в корзину. При рендере хедера, мы в метод передаем кол-во товаров в корзине. Это count
class Header {
  // Напишем функцию для обработчика событий и поместим обрработчик событий в div (class='header-counter')
  // Получает при нажатие на кол-во товаров, будет вызываться обработчик событий. И он будет нам использовать метод render класса Shopping
  // Почему onclick='headerPage.handlerOpenShoppingPage();', а не onclick='handlerOpenShoppingPage' - потому что handlerOpenShoppingPage(); - это обработчик, который является методом класса Header.
  // Поэтому пишется headerPage.handlerOpenShoppingPage();, то есть мы вызывает этот метод из класса Header. Если так не сделать, то handlerOpenShoppingPage - будет тупо undefiend
  handlerOpenShoppingPage() {
    shoppingPage.render(); //Вызывает класс Sopping и использует его метод render
  }

  render(count) {
    const html = `
    <div class='header-container'>
        <div class='header-counter' onclick='headerPage.handlerOpenShoppingPage();'>
        👌🏽 ${count}
        </div>
    </div>
    `;
    ROOT_HEADER.innerHTML = html;
  }
}

const headerPage = new Header();

// Берем массив с товарами и вычисляем его длину, после чего передаем в метод render у header
// Но нюанс в том, что меняться count будет только, при обновление страницы. То есть блоки будут рендерится заново и будет обновляться число.
// Поэтому рендер count можно вызвать в обработчике событий, когда меняется длина массива (при добавление или удаление товара)
