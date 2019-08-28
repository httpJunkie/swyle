module Mutations
    class Logout < BaseMutation
      context[:current_user] = nil
    end
  end