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
    path: "https://calculator-constructorpk.netlify.app/",
    repo: "https://github.com/PolinaKuksova2022/Calculator-Constructor/tree/develop",
    img: "../../../static/calculator.JPG",
    title: "Drag-and-drop конструктор калькулятора",
    description:
      "У calculator-constructor два режима работы runtime и constructor. В режиме runtime можно перемещать элементы из панели на холст. В режиме constructor калькулятор производит вычисления.",
    stack: "React, TypeScript, Scss",
  },
  {
    path: "https://shkredovdmitriy.github.io/online-store/",
    repo: "https://github.com/PolinaKuksova2022/PolinaKuksova2022.github.io/tree/develop",
    img: "./store.JPG",
    title: "Online-Store",
    description:
      "Многостраничный сайт. Основная страница содержит карточки товара, два блока фильтров, по категории и брэнду/названию. Реализована сортировка продуктов, текстовый поиск по всем данным продуктов, роутинг с query-параметрами. Карточка товара с описанием товара и коллекцией изображений. Страница корзины товаров. Реализован блок отображения добавленных продуктов, увеличение кол-ва конкретного товара и его удаление, пагинация, хранение данных в localStorage, промокод блок, кнопка открытия модального окна оформления покупки. Модальное окно оформления товара. (Работа выполнялась в команде из 2х человек)",
    stack: "React, Redux, TypeScript, Scss, eslint, RRD",
  },
  {
    path: "https://cheery-paletas-21c232.netlify.app/",
    repo: "https://github.com/PolinaKuksova2022/Songbird",
    img: "./songbird.JPG",
    title: "Songbird",
    description:
      "Приложение-викторина для распознавания птиц по их голосам. Приложение состоит из двух страниц: стартовая страница приложения и страница викторины. В викторине несколько этапов. На каждом этапе птица выбирается рандомно из массива данных. При клике по варианту ответа с названием птицы, в блоке с описанием птицы выводятся информация о ней. За ответ начисляются баллы, количество зависит от попытки на которой участник дал правильный ответ.",
    stack: "Webpack, JavaScript, Scss",
  },
];
