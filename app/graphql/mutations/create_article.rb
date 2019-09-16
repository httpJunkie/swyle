module Mutations
  class CreateArticle < BaseMutation
    argument :title, String, required: true
    argument :body, String, required: true
    
    type Types::ArticleType
    

    def resolve(title: nil, body: nil)
      snippet = body[0, 300]
      #TODO: regexp the hell out of this
        # Article.create!(
        #     title: title,
        #     body: body,
        #     snippet: snippet,
        #     user: context[:current_user]
        # )
        article = Article.new
        article.title =  title
        article.body = body
        article.snippet = snippet
        article.user = context[:current_user]
        
        if article.save 
          SwyleSchema.subscriptions.trigger("articleAdded", {}, article)
          debugger
          # { article: article}
          article
        else
          { errors: article.errors.full_messages }
        end
    end

  end
end