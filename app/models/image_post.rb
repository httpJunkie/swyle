class ImagePost  < ApplicationRecord

    validates :title, presence: true
    # has_attached_file :image
    # validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/


    #ImagePost takes on the name of post for the purposes of this association
    has_many :comments, as: :post, dependent: :destroy,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: "Comment"

    has_many :likes, as: :post, dependent: :destroy,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: "Like"

    has_many :funnies, as: :post, dependent: :destroy,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: "Funny"

    has_many :spicies, as: :post, dependent: :destroy,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: "Spicy"


    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"

    def count
        self.comments.size
    end
    
    def likers 
        self.likes.map {|like| like.user_id}
    end

    def burned
        self.spicies.map {|spicy| spicy.user_id}
    end

    def spicy_count
        self.spicies.size
    end

    def like_count
        self.likes.size
    end
 
end