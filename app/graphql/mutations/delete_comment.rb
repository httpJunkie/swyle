module Mutations
    class DeleteComment < BaseMutation
      include Concurrent::Async
      argument :id, Int, required: true
      
      type Types::CommentType
  
      def resolve(id: nil) 
          comment = Comment.find(id)
          post = comment.post
          commentor = comment.user
          comment_clone = comment
          
          SwyleSchema.subscriptions.trigger("commentDeleted", {}, comment_clone).await
          SwyleSchema.subscriptions.trigger("articleUpdated", {}, post)
          comment.destroy
          post
      end
    end
  end