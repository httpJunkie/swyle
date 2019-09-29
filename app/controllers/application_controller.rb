class ApplicationController < ActionController::API
    helper_method :current_user
    helper_method :cookies

    # def current_user
    #     token = request.headers["Authorization"].to_s
    #     email = Base64.decode64(token)
    #     User.find_by(email: email)
    # end    


end
