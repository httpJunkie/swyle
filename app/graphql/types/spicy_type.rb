module Types
  class SpicyType < Types::BaseObject
        graphql_name "Spicy"
        field :id, Int, null: false
        field :user, UserType, null: false, method: :user
        field :post_type, String, null: false
        field :post, PostUnion, null: false, method: :post
  end
end