module Mutations
    class SignInUser < BaseMutation

      null true
  
      argument :email, Types::AuthProviderEmailInput, required: false
  
      field :token, String, null: true
      field :user, Types::UserType, null: true

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

      def resolve(email: nil)
        return unless email
        user = User.find_by email: email[:email]
        if user && user.authenticate(email[:password])
          context[:session][:session_token] = user.reset_token        
          context[:current_user] = user 
          context[:cookies].signed[:user_id] = user.id
          token = user.session_token
          { user: user, token: token }
        else
         { errors: user.errors.full_messages}
        end
      end


    end
  end