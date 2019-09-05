module Types
  class MutationType < Types::BaseObject
    field :create_user, mutation: Mutations::CreateUser
    field :sign_in_user, mutation: Mutations::SignInUser
    field :logout, mutation: Mutations::Logout

    field :create_article, mutation: Mutations::CreateArticle
    field :update_article_title, mutation: Mutations::UpdateArticleTitle
    field :update_article_body, mutation: Mutations::UpdateArticleBody
    field :delete_article, mutation: Mutations::DeleteArticle
  

    field :post_comment, mutation: Mutations::PostComment
    field :update_comment, mutation: Mutations::UpdateComment
    field :delete_comment, mutation: Mutations::DeleteComment
    
    field :create_image_post, mutation: Mutations::CreateImagePost
    field :sign_s3, mutation: Mutations::SignS3
  end
end
