export function Post({ content, author }) {
  return (
    <div>
      <h1>{author}</h1>
      <p>{content}</p>
    </div>
  );
}
