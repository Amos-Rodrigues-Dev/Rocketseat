import { Summary } from '../Summary';
import { TranssactionsTable } from '../TranssactionsTable';
import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TranssactionsTable />
    </Container>
  );
}
