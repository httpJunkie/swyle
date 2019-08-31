module Types
    class S3PayloadType < Types::BaseObject
        graphql_name "S3PayloadType"
        field :signed_request, String, null: false
        field :url, String, null:false
    end
end