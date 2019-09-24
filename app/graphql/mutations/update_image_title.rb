module Mutations
    class UpdateImageTitle < BaseMutation
      argument :id, Int, required: true
      argument :title, String, required: true
      
      type Types::ImageType
  
      def resolve(id: nil, title: "")
          image = ImagePost.find(id)
          return unless image
          image.title = title
          if image.save
            SwyleSchema.subscriptions.trigger("imageUpdated", {}, image)
            image
          end
      end
    end
  end