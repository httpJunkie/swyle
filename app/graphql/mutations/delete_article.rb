module Mutations
    class DeleteArticle < BaseMutation
      argument :id, Int, required: true
      
      type Types::ArticleType
  
      def resolve(id: nil)
          article = Article.find(id)
          debugger
          article.destroy
          #Destroy
      end
    end
  end