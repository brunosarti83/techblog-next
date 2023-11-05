export default function page({ params }) {
  const { blogid } = params;
  return (
    <div>
      <h1>Edit Page for Blog id: {blogid}</h1>
    </div>
  );
}
