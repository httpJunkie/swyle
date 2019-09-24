module Mutations
    class DeleteComment < BaseMutation
      include Concurrent::Async
      argument :id, Int, required: true
      
      type Types::CommentType
  
      def resolve(id: nil) 
          comment = Comment.find(id)
          post = comment.post
          commentor = comment.user
          phony = {
            id: comment.id, 
            body: comment.body,
            createdAt: comment.created_at, 
            commentor: {
              username: commentor.username, 
              id: commentor.id
              }
            }
          SwyleSchema.subscriptions.trigger("commentDeleted", {}, phony)
          SwyleSchema.subscriptions.trigger("articleUpdated", {}, post)
          comment.destroy
          phony
      end
    end
  end