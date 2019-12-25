module Jwt::TokenProvider
  extend self
 
  def call(payload)
    issue_token(payload)
  end
 
  private
  def issue_token(payload)
    
     raise StandardError.new("payload is nil") unless payload
    # JWT.encode(payload, Rails.application.secrets.secret_key_base)
    JWT.encode(payload, ENV['SECRET_KEY_BASE'])
  end
end