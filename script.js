function sendData() {
  Telegram.WebApp.sendData("Пользователь нажал кнопку!");
  Telegram.WebApp.close();
}

window.onload = () => {
  Telegram.WebApp.ready();
};
