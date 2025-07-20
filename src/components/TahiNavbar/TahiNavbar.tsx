import { NavLink } from '@mantine/core';
import { useLocation } from 'react-router-dom';
import { IconArticle, IconTool } from '@tabler/icons-react';

export function TahiNavbar() {

  const location = useLocation();

  return (
    <>
      <NavLink
        href = "#"
        label="List"
        leftSection={<IconArticle size={16} stroke={1.5} />}
        active={location.pathname === '/'}
      />
      <NavLink
        href = "#technology"
        label="Technology"
        leftSection={<IconTool size={16} stroke={1.5} />}
        active={location.pathname === '/technology'}
      />
    </>
  );
}
