"use server";
import { revalidatePath } from "next/cache";
import paths from "../paths";
import { db } from "@/db";
import { z } from "zod";

const createTopicSchema = z.object({
    name: z.string().min(3).max(255).regex(/^[a-zA-Z0-9 ]*$/, { message: "Name must be alphanumeric and contain spaces" }),
    description: z.string().min(3).max(255)
});

export async function createTopicAction(formData: FormData) {
  const name = formData.get("name");
  const description = formData.get("description");


  console.log(name, description);
 
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!result.success) {
    return { error: result.error.flatten().fieldErrors };
  }

  const { name, description } = result.data;

  const topic = await db.topic.create({
    data: {
      name,
      description,
    },
  });
}
