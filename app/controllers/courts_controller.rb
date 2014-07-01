class CourtsController < ApplicationController

  # Keep under minimum for courts in Staten Island
  MAX_TO_DISPLAY = 25

  def show
    @court = Court.find(params[:id])
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
end
