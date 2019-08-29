module Types
  class ArticleType < Types::BaseObject
    graphql_name "Article"
    field :id, Int, null: false
    field :author, UserType, null: false, method: :user
    field :title, String, null: false
    field :snippet, String, null: false
    field :body, String, null: false
    field :comments, [CommentType], method: :comments, null: true
  end
end