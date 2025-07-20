import { NavLink } from '@mantine/core';
import { IconArticle, IconTool } from '@tabler/icons-react';

export function TahiNavbar() {

  return (
    <>
      <NavLink
        href = "#"
        label="List"
        leftSection={<IconArticle size={16} stroke={1.5} />}
        active
      />
      <NavLink
        href = "#technology"
        label="Technology"
        leftSection={<IconTool size={16} stroke={1.5} />}      />
    </>
  );
}
