import Image from "next/image";
import TopicCreateForm from "@/components/topics/topic-create-form";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <h1 className="text-2xl font-bold col-span-3">Topics</h1>
      <div className="col-span-2">
        {/* Add your topics list or content here */}
      </div>
      <div className="col-span-1">
        <TopicCreateForm />
      </div>
    </div>
  );
}
