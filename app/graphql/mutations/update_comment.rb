module Mutations
    class UpdateComment < BaseMutation
      argument :id, Int, required: true
      argument :body, String, required: true
      
      type Types::CommentType
  
      def resolve(id: nil, body: "")
          comment = Comment.find(id)
          return unless comment
          #Return if comment isn't found, add error message later.
          comment.body = body
          comment.save
          SwyleSchema.subscriptions.trigger("commentUpdated", {}, comment)
          comment
      end
    end
  end