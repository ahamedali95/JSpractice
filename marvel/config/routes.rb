Rails.application.routes.draw do
  get '/superheroes', to: "superheroes#index"
  get '/superheroes/:id', to: "superheroes#show"
  get '/superheroes/new', to: "superheroes#new"
  get "/superheroes/edit", to: "superheros#edit"
  post "/superheros", to: "superheroes#create"
  patch "/superheros/:id", to: "superheroes#update"
  delete "/superheros/:id", to: "superheroes#destroy"
end
