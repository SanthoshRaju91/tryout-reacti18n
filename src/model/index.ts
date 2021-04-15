import i18n from "../i18n";

export interface INav {
  key: string;
  label: string;
}

export const Navs: INav[] = [
  {
    key: "1",
    label: i18n.t("menu.home"),
  },
  {
    key: "2",
    label: i18n.t("menu.performance"),
  },
  {
    key: "3",
    label: i18n.t("menu.blog"),
  },
];
