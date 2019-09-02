module Mutations
    class DeleteComment < BaseMutation
      argument :id, Int, required: true
      
      type Types::CommentType
  
      def resolve(id: nil) 
          comment = Comment.find(id)
          comment.destroy
      end
    end
  end