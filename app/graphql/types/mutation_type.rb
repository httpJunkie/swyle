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

    field :like_post, mutation: Mutations::LikePost
    field :unlike_post, mutation: Mutations::UnlikePost

    field :create_funny, mutation: Mutations::CreateFunny
    field :delete_funny, mutation: Mutations::DeleteFunny

    field :create_spicy, mutation: Mutations::CreateSpicy
    field :delete_spicy, mutation: Mutations::DeleteSpicy

    field :create_smart, mutation: Mutations::CreateSmart
    field :delete_smart, mutation: Mutations::DeleteSmart
    
    field :create_image_post, mutation: Mutations::CreateImagePost
    field :update_image_title, mutation: Mutations::UpdateImageTitle
    field :update_image_description, mutation: Mutations::UpdateImageDescription
    field :delete_image, mutation: Mutations::DeleteImage
    field :sign_s3, mutation: Mutations::SignS3
  end
end
