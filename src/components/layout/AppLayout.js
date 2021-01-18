import React from "react";
import { Container, Header, Content } from "rsuite";
import { SidebarMenu } from "../navigation/SidebarMenu";

export const AppLayout = () => {
  return (
    <Container>
      <SidebarMenu />
      <Container style={{ padding: 10 }}>
        <Header>
          <h3>Dashboard</h3>
        </Header>
        <Content style={{ marginTop: 10 }}>Content</Content>
      </Container>
    </Container>
  );
};
