class User < ApplicationRecord
 
  has_secure_password
  validates :username, presence: true, uniqueness: true 
  validates :email, presence: true, uniqueness: true

  has_many :articles,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: "Article"

  has_many :image_posts,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: "ImagePost" 
  
  has_many :comments,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: "Comment"

  has_many :likes,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: "Like"

  has_many :funnies,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: "Funny"


  def reset_token
    self.session_token = Jwt::TokenProvider.(user_id: self.id)
    self.save!
    self.session_token
  end

  def ensure_token
    self.session_token = Jwt::TokenProvider.(user_id: self.id)
  end
end