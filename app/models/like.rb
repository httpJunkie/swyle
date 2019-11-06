
#Like, it's, a like. It's a potential reaction to a post. Posts can be Articles or they can be ImagePosts
class Like < ApplicationRecord

    validates :user_id, uniqueness: { scope: :post_id }
    
    belongs_to :post, polymorphic: true,
    primary_key: :id,
    foreign_key: :post_id

    belongs_to :user,
    primary_key: :id, 
    foreign_key: :user_id,
    class_name: "User"

end