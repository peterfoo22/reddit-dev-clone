const paths = {
    homePath: () => "/",
    topicShowPath: (topicSlug: string) => `/topics/${topicSlug}`,
    postCreatePath: (topicSlug: string) => `/topics/${topicSlug}/post/new`,
    postEditPath: (topicSlug: string, postId: string) => `/topics/${topicSlug}/post/${postId}/edit`,
    postShowPath: (topicSlug: string, postId: string) => `/topics/${topicSlug}/post/${postId}`,

}

export default paths;