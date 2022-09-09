import { useRouter } from 'next/router';

export default function ProductItem() {
  const { query } = useRouter();

  return (
    <div>
      <h1>Product Item {JSON.stringify(query)}</h1>
    </div>
  );
}
