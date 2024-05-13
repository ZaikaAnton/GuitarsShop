class Spinner {
  // Метод, который скрывает спиннер
  handleClear() {
    ROOT_SPINNER.innerHTML = "";
  }

  render() {
    const html = `
        <div class='spinner-container'>
            <img class='spinner__img' src='components/Spinner/img/Spinner-1s-200px.svg' />
        </div>
    `;

    ROOT_SPINNER.innerHTML = html;
  }
  1;
}

const spinnerPage = new Spinner();
