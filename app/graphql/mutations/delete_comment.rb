module Mutations
    class DeleteComment < BaseMutation
      argument :id, Int, required: true
      
      type Types::CommentType
  
      def resolve(id: nil) 
          comment = Comment.find(id)
          post = comment.post
          commentor = comment.user
          phony_comment = {commentor: {username: commentor.username, id: commentor.id}, body: comment.body, id: comment.body, createdAt: comment.createdAt }
          SwyleSchema.subscriptions.trigger("commentDeleted", {}, phony_comment)
          SwyleSchema.subscriptions.trigger("articleUpdated", {}, post)
          comment.destroy
          post
      end
    end
  end