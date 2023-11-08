import BlogForm from "@/components/BlogForm/BlogForm";

export default function page() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl font-bold text-gray-800">Add Blog</h1>
      <hr />
      <div>
        <BlogForm />
      </div>
    </div>
  );
}
