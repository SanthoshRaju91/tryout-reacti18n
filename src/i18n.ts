import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "menu.home": "Home",
        "menu.performance": "Performance",
        "menu.blog": "Blog",
        "content.first":
          "This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.",
        "content.second":
          "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.",
      },
    },
    jp: {
      translation: {
        "menu.home": "ホームホーム",
        "menu.performance": "パフォーマンス",
        "menu.blog": "ブログ",
        "content.first":
          "これは、必要に応じてフレックスアイテムを成長させる能力を定義します。比率として機能する単位のない値を受け入れます。これは、アイテムが占めるフレックスコンテナ内の使用可能なスペースの量を決定します。",
        "content.second":
          "これは、必要に応じてフレックスアイテムを成長させる能力を定義します。比率として機能する単位のない値を受け入れます。これは、アイテムが占めるフレックスコンテナ内の使用可能なスペースの量を決定します",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
