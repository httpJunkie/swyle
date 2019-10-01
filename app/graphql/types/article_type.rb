module Types
  class ArticleType < Types::BaseObject
    graphql_name "Article"
    field :id, Int, null: false
    field :author, UserType, null: false, method: :user
    field :title, String, null: false
    field :snippet, String, null: false
    field :body, String, null: false
    field :comments, [CommentType], method: :latest_comments, null: true 
    field :count, Integer, null: false do 
      :comments.size
    end
    field :like_count, Integer, null: false do
      :likes.size
    end
    #this is so that we can find the user ids of everyone who likes the post, image will have the same
    field :likers, [Integer], method: :likers, null: true 
    field :created, String, method: :created_at, null: false
    field :reactions, [GraphQL::Types::JSON], method: :reactions, null: true
  end
end