module Mutations
    class LikePost < BaseMutation    
        argument :post_type, String, required: true
        argument :user_id, Integer, required: true
        argument :post_id, Integer, required: true
        type Types::LikeType
        def resolve(user_id: nil, post_id: nil, post_type: nil)
            like = Like.new
            like.user_id = user_id
            like.post_id = post_id
            like.post_type = post_type
            like.save
            if post_type === "Article"
                article = Article.find(post_id.to_i)
                SwyleSchema.subscriptions.trigger("articleLiked", {}, article)
            end
            like
        end
    end
  end