module Mutations
    class UnlikePost < BaseMutation    
        argument :post_type, String, required: true
        argument :user_id, Integer, required: true
        argument :post_id, Integer, required: true
        field :id :email, Integer, null: true
        # type Types::LikeType
        def resolve(user_id: nil, post_id: nil, post_type: nil)
            like = Like.find_by(user_id: user_id, post_id: post_id, post_type: post_type)
            like.destroy
            if post_type === "Article"
                article = Article.find(post_id.to_i)
                SwyleSchema.subscriptions.trigger("articleUpdated", {}, article)
                # article
            end

            if post_type === "ImagePost"
                image = ImagePost.find(post_id.to_i)
                SwyleSchema.subscriptions.trigger("imageUpdated", {}, image)
                # image
            end
            {id: like.id}
        end
    end
  end