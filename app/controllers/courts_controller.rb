class CourtsController < ApplicationController

  before_action :determine_scope

  # Keep under minimum for courts in Staten Island
  MAX_TO_DISPLAY = 25

  def index
    @courts = @scope.all
    respond_to do |format|
      format.html {}
      format.json { render json: @courts.to_json }
    end
  end

  def show
    @court = Court.find(params[:id])
    @map_url = Google.embed_map_url(@court)
    respond_to do |format|
      format.html {}
      format.json { render json: @court.to_json }
    end
  end

  def search
    if params[:lat] == 'error' # custom error code
      @limit_result_courts = []
    else
      lat_lon = [params[:lat].to_f, params[:lon].to_f]
      result_courts = Court.courts_near(lat_lon)
      @limit_result_courts = result_courts.values.sort { |a, b| result_courts.key(a) <=> result_courts.key(b) }.first(20)
    end
  end

  def add_court
    current_user.courts << Court.find(params[:court_id]) unless current_user.nil?
    respond_to do |format|
      format.html { }
      format.json { render json: !!current_user }
    end
  end

  def remove_court
    current_user.courts.delete(Court.find(params[:court_id]))
    render nothing: true
  end

  private

  def determine_scope
    @scope = params[:user_id] ? User.find(params[:user_id]).courts : Court
  end
end
