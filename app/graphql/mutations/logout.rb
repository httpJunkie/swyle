module Mutations
    class Logout < BaseMutation    
        field :email, String, null: true
        # def resolve 
        # {email: ""}
        # end

        def resolve
            user = context[:current_user]
            user.reset_token
            context[:current_user] = nil
            debugger
            {email: ""}
        end
    end
  end