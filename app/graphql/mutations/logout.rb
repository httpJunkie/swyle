module Mutations
    class Logout < BaseMutation    
        field :email, String, null: true
        # def resolve 
        # {email: ""}
        # end

        def resolve
            cookies.delete(:jwt)
        end
    end
  end