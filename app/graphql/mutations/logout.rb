module Mutations
    class Logout < BaseMutation    
        field :email, String, null: true
        # def resolve 
        # {email: ""}
        # end

        def resolve
            {email: ""}
        end
    end
  end