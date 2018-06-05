class UsersController < ApplicationController

  def index
    @users = User.where('name like ? and id != ?', "%#{search_params}%", current_user.id)
    respond_to do |format|
      format.html
      format.json { @users }
    end
  end

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to :back
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end

  def search_params
    params.require(:keyword)
  end
end
