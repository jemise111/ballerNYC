class UsersController < ApplicationController

  # index is nested under games resource
  def index
    @users = Game.find(params[:game_id]).users
    respond_to do |format|
      format.html {}
      format.json { render json: @users.to_json }
    end
  end

  def show
    redirect_to root_path unless User.find(params[:id]) == current_user
  end

end
