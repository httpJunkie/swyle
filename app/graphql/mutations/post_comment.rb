module Mutations
    class PostComment < BaseMutation    
        argument :body, String, required: true
        argument :post_type, String, required: true
        argument :user_id, Integer, required: true
        argument :post_id, Integer, required: true
        type Types::CommentType
        def resolve(body: nil, user_id: nil, post_id: nil, post_type: nil)
            comment = Comment.new
            comment.body = body 
            comment.user_id = user_id
            comment.post_id = post_id
            comment.post_type = post_type
            comment.save
            if post_type === "Article"
                SwyleSchema.subscriptions.trigger("articleUpdated", {}, comment.post)
            end
            if post_type === "ImagePost"
                SwyleSchema.subscriptions.trigger("imageUpdated", {}, comment.post)
            end
            SwyleSchema.subscriptions.trigger("commentAdded", {}, comment)
            comment
        end
    end
  end