Rails.application.routes.draw do
  # api routes should be in api/v1/routes
  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end
  # resources :posts
end
