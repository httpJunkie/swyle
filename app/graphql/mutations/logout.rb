module Mutations
    class Logout < BaseMutation    
        field :email, String, null: true

        def resolve
            user = context[:current_user]
            puts "Logging Out: #{context[:session][:session_token]}";
            debugger
            user.reset_token
            debugger
            context[:current_user] = nil
            context[:session][:session_token] = nil
            #Maybe this?
            context[:cookies].signed[:user_id] = nil
            puts "After The Logout: #{context[:session][:session_token]}";
            token = SecureRandom::urlsafe_base64
            {email: token}
        end
    end
  end