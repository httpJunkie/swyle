class ApplicationController < ActionController::API
   include ::ActionController::Cookies
  private

# def current_user
#     token = request.headers["Authorization"].to_s
#     email = Base64.decode64(token)
#     User.find_by(email: email)
# end    
end
