export interface TNav {
  id: number;
  path: string;
  name: string;
}
export const nav: TNav[] = [
  { id: 1, path: "#about", name: "Основная информация" },
  { id: 2, path: "#skills", name: "Технические навыки" },
  { id: 3, path: "#project", name: "Проекты" },
  { id: 4, path: "#education", name: "Образование и курсы" },
  { id: 5, path: "#experience", name: "Опыт работы" },
];
