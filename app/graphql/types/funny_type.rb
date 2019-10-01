module Types
  class FunnyType < Types::BaseObject
        graphql_name "Funny"
        field :id, Int, null: false
        field :laugher, UserType, null: false, method: :user
        field :post_type, String, null: false
        field :post, PostUnion, null: false, method: :post
  end
end