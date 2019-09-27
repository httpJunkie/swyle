class ApplicationController < ActionController::API
   include ::ActionController::Cookies


  def authenticate_user
    jwt = cookies.signed[:jwt]
    decode_jwt(jwt)
  end

  private

# def current_user
#     token = request.headers["Authorization"].to_s
#     email = Base64.decode64(token)
#     User.find_by(email: email)
# end    
end
