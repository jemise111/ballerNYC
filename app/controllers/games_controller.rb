class GamesController < ApplicationController

  before_action :determine_scope

  def index
    @games = @scope.all
    respond_to do |format|
      format.html {}
      format.json { render json: @games.to_json }
    end
  end

  def show
    @game = Game.find(params[:id])
    respond_to do |format|
      format.html {}
      format.json { render json: @game.to_json }
    end
  end

  private

  def determine_scope
    @scope = params[:user_id] ? User.find(params[:user_id]).games : Game
  end

end
