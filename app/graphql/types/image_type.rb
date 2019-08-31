module Types
  class ImageType < Types::BaseObject
    graphql_name "Image"
    field :id, Int, null: false
    field :author, UserType, null: false, method: :user
    field :comments, [CommentType], method: :comments, null: true
    field :count, Integer, null: false do 
      :comments.size
    end
    field :url, types.String do
       resolve ->(image_post, _args, _ctx) {image_post.image.url }
    end
  end
end