"use client";
import { Input, Button, Textarea, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { useFormState } from "react-dom";
import { createTopicAction } from "@/app/actions/create-topic";

export default function TopicCreateForm() {

  const [formState, formAction] = useFormState(createTopicAction, { errors: {} });

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Button color="primary">Create Topic</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px]">
        <form action={formAction} className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Create a new topic</h3>
          <Input name="name" label="Name" isInvalid={!!formState.errors.name} errorMessage={formState.errors.name?.join(", ")} labelPlacement="outside" />

          <Textarea name="description" label="Description" isInvalid={!!formState.errors.description} errorMessage={formState.errors.description?.join(", ")} labelPlacement="outside" />
          
          {formState.errors._form && formState.errors._form.map((error) => (
            <p key={error} className="text-sm text-red-500">{error}</p>
          ))}

          <Button type="submit" color="primary">Create</Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
