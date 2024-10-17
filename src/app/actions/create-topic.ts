"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {Topic} from "@prisma/client";
import { z } from "zod";
import { auth } from "@/auth";
import { db } from "@/db";
import paths from '../../../src/app/paths'

const createTopicSchema = z.object({
    name: z.string().min(3).max(255).regex(/^[a-zA-Z0-9 ]*$/, { message: "Name must be alphanumeric and contain spaces" }),
    description: z.string().min(3).max(255)
});

interface CreateTopicFormState {
    errors: {
        name?: string[];
        description?: string[];
        _form?: string[];
    }
}

export async function createTopicAction(formState:CreateTopicFormState,  formData: FormData) : Promise<CreateTopicFormState> {

  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  let topic: Topic;

  try {
    topic = await db.topic.create({
        data: {
            slug: result.data.name,
            description: result.data.description,
            name: result.data.name,
        }
      });
  } catch (error:unknown) {
    if(error instanceof Error) {
        return { errors: { _form: [error.message] } };
    }
    return { errors: { _form: ["An unknown error occurred"] } };
  }

  revalidatePath("/");

  redirect(paths.topicShowPath(topic.slug));
    //this would be a more the way you would normally do it but for all intenses and purpse
    // const user = await auth.getUser();

    // const session = await auth.getSession();

    // if(!session) {
    //     return { errors: { _form: ["You must be logged in to create a topic"] } };

}
