module Types
  class MutationType < Types::BaseObject
    field :create_user, mutation: Mutations::CreateUser
    field :sign_in_user, mutation: Mutations::SignInUser
    field :create_article, mutation: Mutations::CreateArticle
    field :delete_article, mutation: Mutations::DeleteArticle
    field :update_article, mutation: Mutations::UpdateArticle
    field :logout, mutation: Mutations::Logout
    field :post_comment, mutation: Mutations::PostComment
    field :create_image_post, mutation: Mutations::CreateImagePost
    field :sign_s3, mutation: Mutations::SignS3
  end
end
