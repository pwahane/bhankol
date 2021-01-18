import React from "react";
import { Nav, Dropdown, Icon } from "rsuite";

export const NavigationDropdowns = () => {
  return (
    <>
      <Nav>
        <Nav.Item eventKey="1" active icon={<Icon icon="dashboard" />}>
          Dashboard
        </Nav.Item>
        <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
          User Group
        </Nav.Item>
        <Dropdown
          eventKey="3"
          trigger="hover"
          title="Advanced"
          icon={<Icon icon="magic" />}
          placement="rightStart"
        >
          <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
          <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
          <Dropdown.Item eventKey="3-3">Brand</Dropdown.Item>
          <Dropdown.Item eventKey="3-4">Loyalty</Dropdown.Item>
          <Dropdown.Item eventKey="3-5">Visit Depth</Dropdown.Item>
        </Dropdown>
        <Dropdown
          eventKey="4"
          trigger="hover"
          title="Settings"
          icon={<Icon icon="gear-circle" />}
          placement="rightStart"
        >
          <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
          <Dropdown.Item eventKey="4-2">Websites</Dropdown.Item>
          <Dropdown.Item eventKey="4-3">Channels</Dropdown.Item>
          <Dropdown.Item eventKey="4-4">Tags</Dropdown.Item>
          <Dropdown.Item eventKey="4-5">Versions</Dropdown.Item>
        </Dropdown>
      </Nav>
    </>
  );
};
