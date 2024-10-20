import React from "react";
import PostCreateForm from "./posts/post-create-form";

interface TopicShowProps {
  params: {
    slug: string;
  };
}

function TopicShow({ params }: TopicShowProps) {
  const decodedSlug = decodeURIComponent(params.slug);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-12">
        <h1 className="text-2xl font-bold mb-2">{decodedSlug}</h1>
      </div>
      <div className="col-span-3">
        <PostCreateForm slug={decodedSlug} />
      </div>
    </div>
  );
}

export default TopicShow;
