module Types
  class LikeType < Types::BaseObject
        graphql_name "Like"
        field :id, Int, null: false
        field :liker, UserType, null: false, method: :user
        field :post_type, String, null: false
        field :post, PostUnion, null: false, method: :post
  end
end