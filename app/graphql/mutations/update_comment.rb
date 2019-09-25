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
          if comment.save
            if post_type === "Article"
                SwyleSchema.subscriptions.trigger("articleUpdated", {}, comment.post)
            end
            if post_type === "ImagePost"
                SwyleSchema.subscriptions.trigger("imageUpdated", {}, comment.post)
            end
            # SwyleSchema.subscriptions.trigger("commentUpdated", {}, comment)
            comment
          end
      end
    end
  end