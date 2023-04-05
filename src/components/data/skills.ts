export interface TSkills {
  description: string;
  img: string;
  name: string;
  a?: string;
}

export const skills: TSkills[] = [
  {
    description:
      "Данное cv выполнено на React. В качестве сборщика использую Vite. Применяю роутинг RRD в header. Примеры моих других работ на react можно посмотреть на странице Проекты или нажать по названию React. (Calculator-Constructor с применением beautiful dnd; Сайт интернет-магазина с корзиной, модальным окном, карточками товара) ",
    img: "./react.svg",
    name: "React",
    a: "https://calculator-constructorpk.netlify.app/",
  },
  {
    description:
      "Я применяла Redux для управления состоянием данных в проекте сайта интеренет-магазина (для просмотра нажмите на название Redux)",
    img: "./redux.svg",
    name: "Redux",
    a: "https://shkredovdmitriy.github.io/online-store/#/",
  },
  {
    description:
      "Данное cv выполнено на React с TS. А также сайт интернет-магазина и Calculator-Constructor. (Нажмите на название TypeScript для перехода на исходный код интернет-магазина)",
    img: "./typescript.svg",
    name: "TypeScript",
    a: "https://github.com/PolinaKuksova2022/PolinaKuksova2022.github.io/tree/develop",
  },
  {
    description:
      "Мои проекты на JS: пятнашки и многоуровневый аудио-квиз. (для просмотра нажмите на название JavaScript)",
    img: "./javascript.svg",
    name: "JavaScript",
    a: "https://cheery-paletas-21c232.netlify.app/",
  },
  {
    description:
      "Рабочий проект с Webpack сборкой - аудио-квиз (Для просмотра нажмите по названию JavaScript). Для удобства я сформировала шаблон с базовой конфигурацией, который можно использовать в проектах. (Для просмотра шаблона из репозитория нажмите по названию Webpack)",
    img: "./webpack.svg",
    name: "Webpack",
    a: "https://github.com/PolinaKuksova2022/webpack5sample",
  },
  {
    description:
      "Для понимания основ работы с платформой Node.js я выполнила: Чтение файла с выводом содержимого в консоль. Запись консольного ввода в файл. Вывод информации о файлаx хранящихся в папке. Копирование папки. Сборка css бандла. Сборка HTML страницы из компонентов и стилей. (Для просмотра нажмите на название)",
    img: "./nodejs.svg",
    name: "NodeJS",
    a: "https://github.com/PolinaKuksova2022/HTML-builder",
  },
  {
    description: "",
    img: "./HTML5.svg",
    name: "HTML 5",
  },
  {
    description:
      "Есть опыт в создании интерактивных сайтов с адаптивным дизайном, использовании grid и flexbox. Умею работать с анимациями, градиентами, тенями, оптимизацией изображения на разных устройствах, использую новые шрифты",
    img: "./css3.svg",
    name: "Css 3",
  },
  {
    description:
      "Все последние проекты сделаны с препроцессором Sass. Я использую SCSS вместо классического Sass, потому что он близок к CSS.",
    img: ".//sass.svg",
    name: "Sass",
  },
  {
    description:
      "На основе дизайн-макетов Figma создаю адаптивную, отзывчивую HTML/Scss вёрстку. Для просмотра макета данного cv кликните по названию Figma",
    img: "./figma.svg",
    name: "Figma",
    a: "https://www.figma.com/file/MXeh5iVtFWjivkrEm3u3Rv/CV%2FResume-(Community)?node-id=0-1&t=xBrThEWgSxqDOUJ7-0",
  },
];
