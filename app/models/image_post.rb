class ImagePost  < ApplicationRecord

validates :title, presence: true
has_attached_file :image
validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/


#ImagePost takes on the name of post for the purposes of this association
has_many :comments, as: :post,
primary_key: :id,
foreign_key: :post_id,
class_name: "Comment"

belongs_to :user,
primary_key: :id,
foreign_key: :user_id,
class_name: "User"

def count
    self.comments.size
end
 
end