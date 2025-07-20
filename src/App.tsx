import '@mantine/core/styles.css';

import { AppShell, Burger, Group, MantineProvider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { TahiRoutes } from './TahiRouter';
import tahiLogo from './assets/tahi_logo_v3_32px.png'
import { theme } from './theme';
import { TahiNavbar } from './components/TahiNavbar/TahiNavbar';

export default function App() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 34}}
        navbar={{
          width: 180,
          breakpoint: 'sm',
          collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
        }}
        padding="md"
      >
        <AppShell.Header bg="#1b364b">
          <Group h="100%" px="md">
            <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" color="#fcfcfc" />
            <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
            <img src={tahiLogo} alt="TAHI"/>
          </Group>
        </AppShell.Header>

        <AppShell.Navbar p="md"><TahiNavbar /></AppShell.Navbar>

        <AppShell.Main>
          <TahiRoutes />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
