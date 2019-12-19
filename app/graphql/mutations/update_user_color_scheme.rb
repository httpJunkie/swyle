#This mutation is for changing a User's color scheme preferences.

module Mutations 
    class UpdateUserColorScheme < BaseMutation
      argument :id, Int, required: true
      argument :color_scheme, String, required: true
      type Types::UserType
      def resolve(args)
        debugger
        user = User.find(args[:id])
        user.color_scheme = args[:color_scheme]
        user.save
        user
      end
    end
end