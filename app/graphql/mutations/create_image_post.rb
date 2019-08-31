

  module Mutations
  class CreateImagePost < BaseMutation
    argument :title, String, required: true
    argument :description, String, required: false
    argument :image, String, required: true
    
    type Types::ImageType
    

    def resolve(title: nil, description: "", image: nil)
        debugger
        ImagePost.create!(
            title: title,
            description: description,
            user: context[:current_user],
            image_url: image
        )
    end
  end
end