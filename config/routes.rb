Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  get '/*path', to: 'react#index'
  post "/graphql", to: "graphql#execute"
  mount ActionCable.server, at: '/cable'
  root 'index#index'
end

# Rails.application.routes.draw do
#   post "/graphql", to: "graphql#execute"
#   if Rails.env.development? 
#     mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
#     root to: redirect("/graphiql")
#   end
#   mount ActionCable.server, at: '/cable'
#   root :to =>  'index#index'
# end

# Rails.application.routes.draw do
#   if Rails.env.development? || Rails.env.staging? || Rails.env.production?
#     mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
#   end
#   post "/graphql", to: "graphql#execute"
#   mount ActionCable.server, at: '/cable'
#   root :to =>  'index#index'
#   # root to: redirect("/graphiql")
# end