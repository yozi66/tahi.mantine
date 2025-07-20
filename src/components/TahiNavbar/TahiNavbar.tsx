import { NavLink } from '@mantine/core';

export function TahiNavbar() {

  return (
    <>
      <NavLink
        href = "#list"
        label="List"
      />
      <NavLink
        href = "#technology"
        label="Technology"
      />
    </>
  );
}
