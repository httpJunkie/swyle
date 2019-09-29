module ApplicationCable
  class Connection < ActionCable::Connection::Base
       identified_by :current_user

    def connect
      self.current_user = current_user
    end

    private

    # def current_user
    #   token = request.params[:token].to_s
    #   email = Base64.decode64(token)
      
    #   User.find_by(email: email)
    # end

    # def current_user
    #   # user ||= Jwt::UserAuthenticator.(request.headers)
    #   butt = "big"
    #   debugger
    #   user ||= User.find(session_token: session[:session_token])

    #   user
    # end

    def current_user       
      user = User.find_by(id: cookies.signed[:user_id])
      user 
    end

  end
end
