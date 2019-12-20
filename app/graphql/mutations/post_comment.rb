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
            comment.user_id = user_id.to_i
            comment.post_id = post_id.to_i
            comment.post_type = post_type

            if comment.save
                if post_type === "Article"
                    debugger
                    SwyleSchema.subscriptions.trigger("articleUpdated", {}, comment.post)
                    return comment

                end
                if post_type === "ImagePost"
                    debugger
                    SwyleSchema.subscriptions.trigger("imageUpdated", {}, comment.post)
                    return comment

                end
            end 
            # SwyleSchema.subscriptions.trigger("commentAdded", {}, comment)
            
        end
    end
  end