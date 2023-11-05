export default function page({ params }) {
  const { blogid } = params;
  return (
    <div>
      <h1>Blog Information id: {blogid}</h1>
    </div>
  );
}
