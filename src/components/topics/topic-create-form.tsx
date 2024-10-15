import { Input, Button, Textarea, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { createTopicAction } from "@/app/actions/create-topic";

export default function TopicCreateForm() {
  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Button color="primary">Create Topic</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px]">
        <form action={createTopicAction} className="flex flex-col gap-4">  
          <h3 className="text-lg font-bold">Create a new topic</h3>
          <Input name="name" label="Name" labelPlacement="outside" />
          <Textarea name="description" label="Description" labelPlacement="outside" />
          <Button type="submit" color="primary">Create</Button> 
        </form>
      </PopoverContent>
    </Popover>
  );
}
