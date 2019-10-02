module Mutations
    class DeleteImage < BaseMutation
      argument :id, Int, required: true
      
      type Types::ImageType
  
      def resolve(id: nil)
          image = ImagePost.find(id)
          image.destroy
      end
    end
  end