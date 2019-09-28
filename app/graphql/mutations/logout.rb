module Mutations
    class Logout < BaseMutation    
        field :email, String, null: true
        # def resolve 
        # {email: ""}
        # end

        def resolve
            user = context[:current_user]
            debugger
            {email: ""}
        end
    end
  end