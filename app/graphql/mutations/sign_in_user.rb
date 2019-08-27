module Mutations
    class SignInUser < BaseMutation
      null true
  
      argument :email, Types::AuthProviderEmailInput, required: false
  
      field :token, String, null: true
      field :user, Types::UserType, null: true
  
      def resolve(email: nil)
       
        return unless email
  
        user = User.find_by email: email[:email]
         
        return unless user
        
        return unless user.authenticate(email[:password])
     
          token = Base64.encode64(user.email)
        { user: user, token: token }
      end
    end
  end