"use client";

import { useFormState } from "react-dom";
import paths from "@/app/paths";
import * as actions from "@/app/actions/create-post";
import { FormButton } from "@/components/common/form-button";

import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

interface PostCreateFormProps {
  slug: string;
}

export default function PostCreateForm({ slug }: PostCreateFormProps) {
  const [formState, formAction] = useFormState(
    actions.createPostAction.bind(null, slug),
    { errors: {} }
  );

  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Button color="primary">Create Post</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form action={formAction}>
            <Input
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.[0]}
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Title"
            />
            <Textarea
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.[0]}
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="content"
            />
            <FormButton onClick={() => {}} type="submit">
              Create
            </FormButton>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
