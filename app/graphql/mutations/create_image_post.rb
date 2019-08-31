

  module Mutations
  class CreateArticle < BaseMutation
    argument :title, String, required: true
    argument :description, String, required: false
    argument :imageBase64, as: :image do
        type types.String
        description 'The base64 encoded version of the image'
  end
    
    type Types::ArticleType
    

    def resolve(title: nil, body: nil)
      snippet = body[0, 300]
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