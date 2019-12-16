#This mutation is for changing a User's color scheme preferences.

module Mutations 
    class UpdateUserColorScheme < BaseMutation
      argument :id, Int, required: true
      argument :color_scheme, String, required: true
      type Types::UserType
      def resolve(id, color_scheme)
        user = User.find(id)
        user.color_scheme = color_scheme
        user.save
        user
      end
    end
end