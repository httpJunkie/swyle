module Types
  class QueryType < Types::BaseObject
    field :articles, [ArticleType], null: false
    def articles
      Article.all 
    end

    field :article, ArticleType, null: false do
      argument :id, Int, required: true
    end
    def article(argument)
      Article.find(argument[:id])
    end

    field :user_by_id, UserType, null: false do 
      argument :id, Int, required: true
    end
    def user_by_id(argument)
      User.find(argument[:id])
    end

    field :user_by_username, UserType, null: false do 
      argument :username, String, required: true
    end
    def user_by_username(argument)
      User.find_by(username: argument[:username])
    end

    field :users, [UserType], null: false
    def users 
      User.all 
    end

    field :current_user, UserType, null: true 
    def current_user
      context[:current_user]
    end

  end #class end
end #module end 