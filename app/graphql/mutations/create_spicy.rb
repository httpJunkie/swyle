module Mutations
    class CreateSpicy < BaseMutation    
        argument :post_type, String, required: true
        argument :user_id, Integer, required: true
        argument :post_id, Integer, required: true
        type Types::SpicyType
        def resolve(user_id: nil, post_id: nil, post_type: nil)
            spicy = Spicy.new
            spicy.user_id = user_id
            spicy.post_id = post_id
            spicy.post_type = post_type
            spicy.save
            if post_type === "Article"
                article = Article.find(post_id.to_i)
                SwyleSchema.subscriptions.trigger("articleUpdated", {}, article)
            end
            if post_type === "ImagePost"
                image = ImagePost.find(post_id.to_i)
                SwyleSchema.subscriptions.trigger("imageUpdated", {}, image)
            end
            spicy
        end
    end
  end