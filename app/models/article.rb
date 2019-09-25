class Article  < ApplicationRecord
    validates :body, :title, presence: true

    has_many :comments, as: :post, dependent: :destroy,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: "Comment"

    has_many :likes, as: :post, dependent: :destroy,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: "Like"
    
    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"

    def count
        self.comments.size
    end

    def like_count
        self.likes.size
    end

    def likers 
        self.likes.map {|like| like.user_id}
    end

    def latest_comments
        self.comments.order(created_at: :desc)
    end
end