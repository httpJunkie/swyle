module Mutations
    class DeleteComment < BaseMutation
      argument :id, Int, required: true
      
      type Types::CommentType
  
      def resolve(id: nil) 
          comment = Comment.find(id)
          post = comment.post
          comment.destroy
          SwyleSchema.subscriptions.trigger("articleUpdated", {}, post)
          post
      end
    end
  end