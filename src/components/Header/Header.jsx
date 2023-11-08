"use client";
import { useRouter } from "next/navigation";

export default function ProjectTitle() {
  const router = useRouter();
  return (
    <div className="bg-gray-800 text-white p-5">
      <h1
        className="text-2xl font-bold cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      >
        TechBlog - NEXT
      </h1>
    </div>
  );
}
