module Mutations
  class CreateArticle < BaseMutation
    argument :title, String, required: true
    argument :body, String, required: true
    
    type Types::ArticleType
    

    def resolve(title: nil, body: nil)
      snippet = body[0, 100]
      #TODO: regexp the hell out of this
        Article.create!(
            title: title,
            body: body,
            snippet: snippet,
            user: context[:current_user]
        )
    end
  end
end