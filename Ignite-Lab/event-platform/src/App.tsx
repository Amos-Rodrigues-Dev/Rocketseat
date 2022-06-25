import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { client } from './lib/apollo';

const GET_LESSONS_QUERY = gql`
  {
    lessons {
      id
      title

      teacher {
        name
      }
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  return (
    <ul>
      {data?.lessons.map(({ title, id }) => {
        return <li key={id}>{title}</li>;
      })}
    </ul>
  );
}

export default App;
