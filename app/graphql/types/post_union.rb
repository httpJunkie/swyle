module Types 
   class PostUnion < Types::BaseUnion
    possible_types Types::ArticleType, Types::ImageType
    
    def self.resolve_type(object, context)
        if object.is_a?(Article)
          Types::ArticleType
        else
          Types::ImageType
        end
    end
   end 
end