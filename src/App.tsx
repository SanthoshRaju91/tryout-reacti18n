import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import { useTranslation } from "react-i18next";
import "./App.css";

const { Header, Content } = Layout;

function App() {
  const [language, setLanguage] = useState("en");
  const { t, i18n } = useTranslation();

  function toggleLanguage() {
    // We could have used simple boolean to get the same results.
    // But I want to be explicit in setting the language.
    if (language === "en") {
      setLanguage("jp");
      i18n.changeLanguage("jp");
    } else {
      setLanguage("en");
      i18n.changeLanguage("en");
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
            <Menu.Item key="1">{t("menu.home")}</Menu.Item>
            <Menu.Item key="2">{t("menu.performance")}</Menu.Item>
            <Menu.Item key="3">{t("menu.blog")}</Menu.Item>
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
