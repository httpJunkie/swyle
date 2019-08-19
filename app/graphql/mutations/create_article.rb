module Mutations
  class CreateArticle < BaseMutation
    argument :title, String, required: true
    argument :body, String, required: true
    
    type Types::ArticleType
    

    def resolve(title: nil, body: nil)
        Article.create!(
            title: title,
            body: body,
            user: context[:current_user]
        )
    end
  end
end