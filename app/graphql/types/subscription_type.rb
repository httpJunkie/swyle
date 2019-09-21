module Types
  class SubscriptionType < GraphQL::Schema::Object
    field :article_added, Types::ArticleType, null: false, description: "An article was posted"
    def article_added
        
    end

    field :article_liked, Types::ArticleType, null: false, description: "Article was liked"
    def article_liked 
    end
    
   end
end