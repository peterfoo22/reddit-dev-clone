'use server';

import { Topic } from "@prisma/client";
import Link from "next/link";
import { Chip } from "@nextui-org/react";
import { db } from "@/db";
import paths from "@/app/paths";

interface TopicListProps {
  topics: Topic[];
}

export async function TopicList() {
  const topics = await db.topic.findMany();

  return <div className="flex flex-wrap gap-2">
    {topics.map((topic) => (
      <Link href={paths.topicShowPath(topic.slug)} key={topic.id}>
        <Chip color="warning" variant="shadow">{topic.name}</Chip>
      </Link>
    ))}
  </div>
}