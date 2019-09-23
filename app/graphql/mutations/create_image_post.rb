

  module Mutations
  class CreateImagePost < BaseMutation
    argument :title, String, required: true
    argument :description, String, required: false
    argument :image, String, required: true
    
    type Types::ImageType
    

    def resolve(title: nil, description: "", image: nil)
        # ImagePost.create!(
        #     title: title,
        #     description: description,
        #     user: context[:current_user],
        #     image_url: image
        # )
        image_post = ImagePost.new
        image_post.title = title
        image_post.description = description
        image_post.user = context[:current_user]
        image_post.image_url = image 
        if image_post.save
          SwyleSchema.subscriptions.trigger("imageAdded", {}, image_post)
          image_post
        else
          {errors: image_post.errors.full_messages}
        end
    end
  end
end