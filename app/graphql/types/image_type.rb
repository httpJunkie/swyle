module Types
  class ImageType < Types::BaseObject
    graphql_name "Image"
    field :id, Int, null: false
    field :author, UserType, null: false, method: :user
    field :url, types.String do
       resolve ->(image_post, _args, _ctx) {image_post.image.url }
    end
  end
end