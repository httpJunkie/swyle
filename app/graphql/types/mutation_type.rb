module Types
  class MutationType < Types::BaseObject
    field :create_user, mutation: Mutations::CreateUser
    field :sign_in_user, mutation: Mutations::SignInUser
    field :create_article, mutation: Mutations::CreateArticle
    field :delete_article, mutation: Mutations::DeleteArticle
    field :update_article, mutation: Mutations::UpdateArticle
  end
end
