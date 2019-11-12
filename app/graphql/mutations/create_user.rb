module Mutations
    class CreateUser < BaseMutation
      class AuthProviderSignupData < Types::BaseInputObject
        argument :email, Types::AuthProviderEmailInput, required: false
      end
  
      argument :username, String, required: true
      argument :auth_provider, AuthProviderSignupData, required: false
  
      type Types::UserType
  
      def resolve(username: nil, auth_provider: nil)
        user = User.new(
          username: username,
          email: auth_provider&.[](:email)&.[](:email),
          password: auth_provider&.[](:email)&.[](:password)
        )
        if user.save
          # token = Jwt::TokenProvider.(user_id: user.id)
          token = SecureRandom::urlsafe_base64
          { user: user, token: token }
        else 
         { errors: user.errors.full_messages}
        end
      #end
      rescue ActiveRecord::RecordInvalid => e
        GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
      end
    end#end of class 
  end #end of module