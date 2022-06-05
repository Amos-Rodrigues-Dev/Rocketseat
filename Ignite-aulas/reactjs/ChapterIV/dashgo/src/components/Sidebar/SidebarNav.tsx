import { Stack } from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';
import { NavLInk } from './NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLInk icon={RiDashboardLine} href="/dashboard">
          Dashboard
        </NavLInk>
        <NavLInk icon={RiContactsLine} href="/users">
          Usuários
        </NavLInk>
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLInk icon={RiInputMethodLine} href="forms">
          Formulários
        </NavLInk>
        <NavLInk icon={RiGitMergeLine} href="automation">
          Automação
        </NavLInk>
      </NavSection>
    </Stack>
  );
}
