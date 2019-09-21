module Mutations
    class UpdateArticleBody < BaseMutation
      argument :id, Int, required: true
      argument :body, String, required: true
      
      type Types::ArticleType
  
      def resolve(id: nil, title: "", body: "")
          article = Article.find(id)
          return unless article
          #Return if article isn't found, add error message later.
          article.body = body
          article.snippet = body[0, 100]
        if  article.save
            SwyleSchema.subscriptions.trigger("articleUpdated", {}, article)
            article
        else
          return article.errors.full_messages
        end   
      end
    end
  end