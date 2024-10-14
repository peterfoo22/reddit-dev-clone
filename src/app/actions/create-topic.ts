"use server";
import { revalidatePath } from "next/cache";
import paths from "../paths";


export async function createTopicAction(formData: FormData) {
  const name = formData.get("name");
  const description = formData.get("description");


  console.log(name, description);
}