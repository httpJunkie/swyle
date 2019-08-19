module Types
    class UserType < BaseObject
      field :id, Int, null: false
      field :username, String, null: false
      field :email, String, null: false
    end
  end