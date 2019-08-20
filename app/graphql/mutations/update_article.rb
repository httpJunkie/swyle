module Mutations
    class UpdateArticle < BaseMutation
      argument :id, Int, required: true
      
      type Types::ArticleType
  
      def resolve(id: nil, title: "", body: "")
          article = Article.find(id)
          return unless article
          #Return if article isn't found, add error message later.
          article.title = title
          article.body = body
          article.save
          #TODO: add backend error handling on this resolver.
      end
    end
  end