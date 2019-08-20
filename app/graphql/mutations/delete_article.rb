module Mutations
    class DeleteArticle < BaseMutation
      argument :id, Int, required: true
      
      type Types::ArticleType
  
      def resolve(id: nil)
        #TODO: Check for context current user here, don't allow this to happen if the ids don't match
        #Yes, it's tedious boilerplate code, but it's gotta be done.
        
          article = Article.find(id)
          article.destroy
          #Destroy
      end
    end
  end