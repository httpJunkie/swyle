module Mutations
    class SignInUser < BaseMutation

      include ActionDispatch
      null true
  
      argument :email, Types::AuthProviderEmailInput, required: false
  
      field :token, String, null: true
      field :user, Types::UserType, null: true
  
      # def resolve(email: nil)
      #   return unless email
      #   user = User.find_by email: email[:email]
      #   return unless user  
      #   return unless user.authenticate(email[:password])
      #     token = Base64.encode64(user.email)
      #   { user: user, token: token }
      # end

      # def resolve(email: nil)
      #   return unless email
      #   user = User.find_by email: email[:email]
      #   if user && user.authenticate(email[:password])
      #     token = Jwt::TokenProvider.(user_id: user.id)
      #     { user: user, token: token }
      #   else
      #    { errors: user.errors.full_messages}
      #   end
      # end

    #Todo by EOD: 
      def resolve(email: nil)
        return unless email
        user = User.find_by email: email[:email]
        if user && user.authenticate(email[:password])
          context[:session][:session_token] = user.reset_token        
          context[:current_user] = user 
          token = user.session_token
          cookies.signed[:user_id] = user.id
          { user: user, token: token }
        else
         { errors: user.errors.full_messages}
        end
      end


    end
  end