module Jwt::TokenDecryptor
  extend self
 
  def call(token)
    decrypt(token)
  end
 
  private
  def decrypt(token)
    begin
      decryption =  JWT.decode(token, Rails.application.secrets.secret_key_base)
      debugger
      decryption
    rescue 
       raise InvalidTokenError
    end
  end
end
 
class InvalidTokenError < StandardError; end;