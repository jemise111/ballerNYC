class CourtsController < ApplicationController

  # Keep under minimum for courts in Staten Island
  MAX_TO_DISPLAY = 25

  def index
    @boroughs = Court.pluck(:borough).uniq
    @courts = Court.all
    # A lot of logic here but feels like this belongs in controller
    unless params[:b].nil?
      courts_in_borough = Court.where(borough: params[:b])
      @display_courts = courts_in_borough.limit(MAX_TO_DISPLAY).offset((params[:p].to_i - 1) * 25)
      @pages = courts_in_borough.size / MAX_TO_DISPLAY + 1
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
end
