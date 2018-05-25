Rails.application.routes.draw do

  resources :groups, only: [:new, :create, :edit, :update]

end
