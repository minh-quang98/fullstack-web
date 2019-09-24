const Post = require("../model/post")

const postService = {
    savePost: (email, content, imageUrl) => {
        console.log(email, content, imageUrl)
        const newPost = new Post({
            email,
            content,
            imageUrl
        })
        newPost.save();
        return newPost;
    },

    getPost: async () => {
        return Post.find({})
    },

    like: async (postId, email) => {
        const post = await Post.findById(postId).select("like");
        if (!post.like) {
            post.like = []
        }
        if (post.like.find(item => item === email) != null) {
            post.like = post.like.filter(item => item !== email)
        } else {
            post.like.push(email)
        }
        await post.save()
        return post.toObject().like
    },

    comment: async (postId, email, content) => {
        const result = await Post.update(
            {_id: postId}, {
            $push: {
                comment: { email, content }
            }
        })
        console.log(result)
    }
}

module.exports = postService