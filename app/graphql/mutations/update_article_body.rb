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
          article.save
          article
          #The mutation updates the database but something goes wrong on GraphQL's end.
          #TODO: add backend error handling on this resolver.
      end
    end
  end