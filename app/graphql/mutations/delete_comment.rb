module Mutations
    class DeleteComment < BaseMutation
      argument :id, Int, required: true
      
      type Types::CommentType
  
      def resolve(id: nil) 
          comment = Comment.find(id)
          post = comment.post
          comment.destroy
          SwyleSchema.subscriptions.trigger("articleUpdated", {}, post)
          SwyleSchema.subscriptions.trigger("commentDeleted", {}, comment)
          post
      end
    end
  end