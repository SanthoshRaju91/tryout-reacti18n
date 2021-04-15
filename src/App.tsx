import React from "react";
import { Layout, Menu, Button } from "antd";
import "./App.css";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header className="header">
        <div className="left-content">
          <div className="logo">
            <h2>An Application</h2>
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Performance</Menu.Item>
            <Menu.Item key="3">Blog</Menu.Item>
          </Menu>
        </div>

        <div className="right-content">
          <div className="actions">
            <Button type="ghost">English</Button>
          </div>
        </div>
      </Header>

      <Content className="content">
        <p>
          This defines the ability for a flex item to grow if necessary. It
          accepts a unitless value that serves as a proportion. It dictates what
          amount of the available space inside the flex container the item
          should take up.
        </p>

        <p>
          This establishes the main-axis, thus defining the direction flex items
          are placed in the flex container. Flexbox is (aside from optional
          wrapping) a single-direction layout concept. Think of flex items as
          primarily laying out either in horizontal rows or vertical columns.
        </p>
      </Content>
    </Layout>
  );
}

export default App;
