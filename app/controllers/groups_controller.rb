class GroupsController < ApplicationController

  def new
  end

  def create
  end

  def edit
    @group = Group.find(params[:id])
    @users = User.all
  end

  def update
  end

end
