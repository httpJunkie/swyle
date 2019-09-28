module Jwt::UserAuthenticator
  extend self
 
  def call(request_headers)
    @request_headers = request_headers
    debugger
 
    begin
      payload, header = Jwt::TokenDecryptor.(token)
      debugger
      return User.find(payload['user_id'])
    rescue => e
      # log error here
      return nil
    end
  end
 
  def token
    @request_headers['Authorization'].to_s
  end
end