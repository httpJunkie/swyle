module Types
  class PhonyCommentType < Types::BaseObject
    graphql_name "PhonyComment"
    field :id, Int, null: false
    field :commentor, UserType, null: false, method: :user
    field :body, String, null: false
    field :post_type, String, null: false
    field :post, PostUnion, null: false, method: :post
    field :created_at, String, null: false
  end
end