export interface TProject {
  path: string;
  repo: string;
  img: string;
  title: string;
  description: string;
  stack: string;
}

export const projects: TProject[] = [
  {
    path: "https://messengerpk.netlify.app/settings",
    repo: "https://github.com/PolinaKuksova2022/middle.messenger.praktikum.yandex/tree/main",
    img: "./static/messenger.JPG",
    title: "Messenger",
    description: "Полноценное приложение, которое можно использовать для общения с друзьями и близкими. Обмен сообщениями происходит в режиме real-time при помощи WebSocket.",
    stack: "Handlebars, JavaScript, Scss, WebSocket ",
  },
  {
    path: "https://store-pk.netlify.app/",
    repo: "https://github.com/PolinaKuksova2022/Online-Store/tree/main",
    img: "./static/store.JPG",
    title: "Online-Store",
    description:
      "Многостраничный сайт, на основной странице размещены карточки товаров и блоки с фильтрами по категориям и брендам/названиям. На странице корзины товаров пользователь может просмотреть информацию о добавленных товарах, изменить количество товаров, воспользоваться пагинацией и ввести промокод. Для хранения данных используется localStorage. Проект был выполнен командой из двух человек.",
    stack: "React, Redux, TypeScript, Scss, RRD",
  },
  {
    path: "https://calculator-constructorpk.netlify.app/",
    repo: "https://github.com/PolinaKuksova2022/Calculator-Constructor/tree/develop",
    img: "./static/calculator.JPG",
    title: "Drag-and-drop конструктор калькулятора",
    description:
      "Онлайн калькулятор с двумя режимами работы runtime и constructor. В режиме runtime можно перемещать элементы из панели на холст. В режиме constructor калькулятор производит вычисления.",
    stack: "React, TypeScript, Scss",
  },
  // {
  //   path: "https://songbird-pk.netlify.app/",
  //   repo: "https://github.com/PolinaKuksova2022/Songbird.quiz",
  //   img: "./static/songbird.JPG",
  //   title: "Songbird",
  //   description:
  //     "Приложение-викторина для распознавания птиц по их голосам. Приложение состоит из двух страниц: стартовая страница приложения и страница викторины.  На странице викторины есть несколько этапов, на каждом из которых случайным образом выбирается птица из массива данных. При клике по варианту ответа с названием птицы, в блоке с описанием птицы выводятся информация о ней. За ответ начисляются баллы, количество зависит от попытки на которой участник дал правильный ответ.",
  //   stack: "Webpack, JavaScript, Scss",
  // },
];
