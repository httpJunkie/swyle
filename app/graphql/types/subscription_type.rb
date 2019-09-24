module Types
  class SubscriptionType < GraphQL::Schema::Object
    field :article_added, Types::ArticleType, null: false, description: "An article was posted"
    def article_added    
    end

    field :article_liked, Types::ArticleType, null: false, description: "Article was liked"
    def article_liked 
    end

    field :article_unliked, Types::ArticleType, null: false, description: "Article was unliked"
    def article_unliked 
    end

    field :article_updated, Types::ArticleType, null: false, description: "Article was updated"
    def article_updated 
    end



    field :image_added, Types::ImageType, null: false, description: "An image was posted"
    def image_added    
    end

    field :image_liked, Types::ImageType, null: false, description: "image was liked"
    def image_liked 
    end

    field :image_unliked, Types::ImageType, null: false, description: "image was unliked"
    def image_unliked 
    end

    field :image_updated, Types::ImageType, null: false, description: "image was updated"
    def image_updated 
    end

    

    field :comment_added, Types::CommentType, null: false, description: "Comment added"
    def comment_added
    end

    field :comment_updated, Types::CommentType, null: false, description: "comment was updated"
    def comment_updated 
    end

    field :comment_deleted, Types::CommentType, null: false, description: "comment was deleted"
    def comment_deleted
    end
    
   end
end