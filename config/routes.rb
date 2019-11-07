# Rails.application.routes.draw do
#   post "/graphql", to: "graphql#execute"
#   if Rails.env.development? 
#     mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
#     root to: redirect("/graphiql")
#   end
#   mount ActionCable.server, at: '/cable'
#   # root :to =>  'index#index'
#   # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
# end

Rails.application.routes.draw do
  if Rails.env.development? || Rails.env.staging? || Rails.env.production?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  mount ActionCable.server, at: '/cable'
  root :to =>  'index#index'
  # root to: redirect("/graphiql")
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end