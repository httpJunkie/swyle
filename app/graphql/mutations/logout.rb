module Mutations
    class Logout < BaseMutation    
        field :email, Types::String, null: true
        def resolve 
            debugger
        {email: ""}
        end
    end
  end