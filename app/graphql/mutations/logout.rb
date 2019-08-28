module Mutations
    class Logout < BaseMutation    
        field :email, String, null: true
        def resolve 
            debugger
        {email: ""}
        end
    end
  end