import { title } from "process";
import { prisma } from "./utils/db";

async function getData() {
  const data = await prisma.blogPost.findMany({
    select: {
       id: true,
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      createdAt: true,
    },
  });
  
  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Posts</h1>

      <div className="grid gtid-cols-1 md:grid-grid-col-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <h1 key={index}>{item.title}</h1>
        ))}
      </div>
    </div>
  );
}
