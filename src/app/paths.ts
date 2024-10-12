const paths = {
    homePath: () => "/",
    topicShowPath: (topicSlug: string) => `/topic/${topicSlug}`,
    postCreatePath: (topicSlug: string) => `/topic/${topicSlug}/post/new`,
    postEditPath: (topicSlug: string, postId: string) => `/topic/${topicSlug}/post/${postId}/edit`,
    postShowPath: (topicSlug: string, postId: string) => `/topic/${topicSlug}/post/${postId}`,

}

export default paths;