import React, { useEffect, useState } from "react";
import { Layout, Menu, Button } from "antd";
import { useTranslation } from "react-i18next";
import "./App.css";
import { INav, Navs } from "./model";

const { Header, Content } = Layout;

const LANG = "lang";

function getSavedLanguagePreference() {
  return window.localStorage.getItem(LANG) || "en";
}

function saveLanguagePreference(lang: string) {
  window.localStorage.setItem(LANG, lang);
}

function App() {
  const [language, setLanguage] = useState(getSavedLanguagePreference());
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  function toggleLanguage() {
    // We could have used simple boolean to get the same results.
    // But I want to be explicit in setting the language.
    if (language === "en") {
      const lang = "jp";
      setLanguage(lang);
      i18n.changeLanguage(lang);
      saveLanguagePreference(lang);
    } else {
      const lang = "en";
      setLanguage(lang);
      i18n.changeLanguage(lang);
      saveLanguagePreference(lang);
    }
  }

  return (
    <Layout>
      <Header className="header">
        <div className="left-content">
          <div className="logo">
            <h2>An Application</h2>
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            {Navs.map((Nav: INav) => (
              <Menu.Item key={Nav.key}>{t(Nav.label)}</Menu.Item>
            ))}
          </Menu>
        </div>

        <div className="right-content">
          <div className="actions">
            <Button type="ghost" onClick={toggleLanguage}>
              {language === "en" ? "English" : "日本語"}
            </Button>
          </div>
        </div>
      </Header>

      <Content className="content">
        <p>{t("content.first")}</p>

        <p>{t("content.second")}</p>
      </Content>
    </Layout>
  );
}

export default App;
