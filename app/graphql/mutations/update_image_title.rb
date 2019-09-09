module Mutations
    class UpdateImageTitle < BaseMutation
      argument :id, Int, required: true
      argument :title, String, required: true
      
      type Types::ImageType
  
      def resolve(id: nil, title: "")
          image = ImagePost.find(id)
          return unless image
          image.title = title
          image.save
          image
      end
    end
  end