module Mutations
    class DeleteComment < BaseMutation
      argument :id, Int, required: true
      
      type Types::CommentType
  
      def resolve(id: nil) 
          comment = Comment.find(id)
          post = comment.post
          commentor = comment.user
          comment.destroy
          SwyleSchema.subscriptions.trigger("commentDeleted", {}, comment)
          SwyleSchema.subscriptions.trigger("articleUpdated", {}, post)
          # post
      end
    end
  end