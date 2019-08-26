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
        debugger
        return unless user.authenticate(email[:password])
        debugger
        crypt = ActiveSupport::MessageEncryptor.new(Rails.application.credentials.secret_key_base.byteslice(0..31))
        token = crypt.encrypt_and_sign("user-id:#{user.id}")
        # token = SecureRandom::urlsafe_base64
        #This is where we are running into a problem - context is nil
        context[:session][:token] = token
        debugger
        { user: user, token: token }
      end
    end
  end