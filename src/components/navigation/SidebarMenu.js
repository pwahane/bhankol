import React from "react";
import { Sidebar, Sidenav, Icon } from "rsuite";
import { NavigationDropdowns } from "./NavigationDropdowns";
import { NavToggle } from "./NavToggle";
const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: "teal",
  color: " #fff",
  whiteSpace: "nowrap",
  overflow: "hidden",
};
export const SidebarMenu = () => {
  const [expand, setExpanded] = React.useState(true);
  const handleToggle = () => {
    setExpanded(!expand);
  };
  return (
    <Sidebar
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
      width={expand ? 260 : 56}
      collapsible
    >
      <Sidenav.Header>
        <div style={headerStyles}>
          <Icon icon="book" size="lg" style={{ verticalAlign: 0 }} />
          <span style={{ marginLeft: 12 }}> Books</span>
        </div>
      </Sidenav.Header>
      <Sidenav
        expanded={expand}
        defaultOpenKeys={["3", "4"]}
        appearance="subtle"
      >
        <Sidenav.Body>
          <NavigationDropdowns />
        </Sidenav.Body>
      </Sidenav>
      <NavToggle
        style={{ marginTop: 500 }}
        expand={expand}
        onChange={handleToggle}
      />
    </Sidebar>
  );
};
