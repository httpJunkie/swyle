module Mutations
    class UpdateImageDescription < BaseMutation
      argument :id, Int, required: true
      argument :description, String, required: true
      
      type Types::ImageType
  
      def resolve(id: nil, description: "")
          image = ImagePost.find(id)
          return unless image
          image.description = description
          if image.save
            SwyleSchema.subscriptions.trigger("imageUpdated", {}, image)
            image
          end
      end
    end
  end