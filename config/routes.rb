Rails.application.routes.draw do
  
  resources :categories, only:[:index, :show]
  resources :sweets, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show]
   
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/sweets_by_date", to: "sweets#sweets_by_date"
  # get "/sweets_by_order", to: "sweets#order"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
