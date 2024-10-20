"use server";
import { db } from "@/db";
import { z } from "zod";
import { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";
import paths from "../paths";
import { redirect } from "next/navigation";


const createPostSchema = z.object({
    title: z.string().min(3).max(255),
    content: z.string().min(3).max(255),
});

interface CreatePostFormState {
    errors: {
        title?: string[];
        content?: string[];
        _form?: string[];
    }
}

export async function createPostAction(slug: string, formState:CreatePostFormState, formData: FormData) : Promise<CreatePostFormState> {
    
    console.log('content from form', formData.get("content"));
    
    const result = createPostSchema.safeParse({
        title: formData.get("title"),
        content: formData.get("content"),
    });

    const topic = await db.topic.findFirst({
        where: { slug: slug }
    });

    if(!topic) {
        return { errors: { _form: ["Topic not found"] } };
    }

    if (!result.success) {
        return { errors: result.error.flatten().fieldErrors };
    }

    // At this point, we know result.success is true, so we can safely access result.data
    try {
        const post = await db.post.create({
            data: {
                title: result.data.title,
                content: result.data.content,
                topicId: topic.id,
                userId: "1",
            }
        });
    } catch (error) {
        return { errors: { _form: ["An unknown error occurred"] } };
    }

    revalidatePath(paths.topicShowPath(slug));
    redirect(paths.topicShowPath(slug));
}   
