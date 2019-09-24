module Mutations
    class DeleteComment < BaseMutation
      include Concurrent::Async
      argument :id, Int, required: true
      
      type Types::CommentType
  
      def resolve(id: nil) 
          comment = Comment.find(id)
          post = comment.post
          commentor = comment.user
          num = comment.id 
          SwyleSchema.subscriptions.trigger("commentDeleted", {}, comment)
          SwyleSchema.subscriptions.trigger("articleUpdated", {}, post)
          comment.destroy
          post
      end
    end
  end