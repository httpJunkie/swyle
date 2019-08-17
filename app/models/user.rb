class User < ApplicationRecord
      attr_reader :password
  validates :password, length: {minimum: 6, allow_nil: true  }
  validates :username, :password_digest, :email, :session_token, presence: true, uniqueness: true
 
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(uname, pword)
    user = User.find_by(username: uname)
    user && user.is_password?(pword) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end


  def reset_token
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_token
   self.session_token ||= SecureRandom::urlsafe_base64
  end
end