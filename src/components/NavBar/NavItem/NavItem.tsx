import React from "react";

interface NavItemProps {
  link: string;
  label: string;
}

const NavItem = (props: NavItemProps) => {
  const { link, label } = props;

  return (
    <li>
      <a href={link}>{label}</a>
    </li>
  );
};

export default NavItem;
