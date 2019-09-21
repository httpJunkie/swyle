module Mutations
    class UpdateArticleTitle < BaseMutation
      argument :id, Int, required: true
      argument :title, String, required: true
      
      type Types::ArticleType
  
      def resolve(id: nil, title: "", body: "")
          article = Article.find(id)
          return unless article
          #Return if article isn't found, add error message later.
          article.title = title
        if  article.save
            SwyleSchema.subscriptions.trigger("articleUpdated", {}, article)
            article
        else
          return article.errors.full_messages
        end  
      end
    end
  end