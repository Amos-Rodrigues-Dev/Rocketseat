import { Box, Stack } from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';
import { NavLInk } from './NavLink';
import { NavSection } from './NavSection';

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLInk icon={RiDashboardLine}>Dashboard</NavLInk>
          <NavLInk icon={RiContactsLine}>Usuários</NavLInk>
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <NavLInk icon={RiInputMethodLine}>Formulários</NavLInk>
          <NavLInk icon={RiGitMergeLine}>Automação</NavLInk>
        </NavSection>
      </Stack>
    </Box>
  );
}
