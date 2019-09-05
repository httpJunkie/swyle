module Mutations
    class UpdateArticle < BaseMutation
      argument :id, Int, required: true
      argument :title, String, required: true
      
      type Types::ArticleType
  
      def resolve(id: nil, title: "", body: "")
          article = Article.find(id)
          return unless article
          #Return if article isn't found, add error message later.
          article.title = title
          article.save
          article
          #The mutation updates the database but something goes wrong on GraphQL's end.
          #TODO: add backend error handling on this resolver.
      end
    end
  end