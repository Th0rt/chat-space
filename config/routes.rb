Rails.application.routes.draw do
  root to: 'messages#index'
  devise_for :users

<<<<<<< HEAD
  resources :groups, only: [:new, :create, :edit, :update]
  resources :messages, only: [:index, :new, :create]
=======
  devise_for :users
  
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :new, :create]
  end
>>>>>>> master

end
