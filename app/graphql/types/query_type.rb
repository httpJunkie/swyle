module Types
  class QueryType < Types::BaseObject
    field :articles, [ArticleType], null: false
    def articles
      Article.all 
    end

    field :article, ArticleType, null: false do
      argument :id, Int, required: true
    end
    field :count, Integer, null: false
    def article(argument)
     Article.find(argument[:id])
    end

    field :image, ImageType, null: false do
      argument :id, Int, required: true
    end
    def image(argument)
      ImagePost.find(argument[:id])
    end

    field :images, [ImageType], null: false
    def images
      ImagePost.all
    end

    field :user_by_id, UserType, null: false do 
      argument :id, Int, required: true
    end
    def user_by_id(argument)
      User.find(argument[:id].to_i)
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

    field :comments_by_post, [CommentType], null: true do
      argument :post_id, Integer, required: true
      argument :post_type, String, required: true
    end
    def comments_by_post(args)
      if args[:post_type] == "Article"
        Article.find(args[:post_id]).comments
      elsif args[:post_type] == "ImagePost"
        ImagePost.find(args[:post_id]).comments
      else
        raise "Invalid post type. How did you find this error? You must have some 1337 skill0rz"
      end 
    end
  end #class end
end #module end 