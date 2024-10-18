import Image from "next/image";
import TopicCreateForm from "@/components/topics/topic-create-form";
import { TopicList } from "@/components/topics/topic-list";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <h1 className="text-2xl font-bold col-span-3">Topics</h1>
      <div className="col-span-2">
        {/* Add your topics list or content here */}
      </div>
      <div className="col-span-1 border-l border-gray-200">
        <TopicCreateForm />
        <Divider className="my-4" />
        <h3 className="text-lg font-bold">All Topics</h3>
        <TopicList />
      </div>
    </div>
  );
}
