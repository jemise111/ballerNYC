module Google
  EMBED_URL  = "https://www.google.com/maps/embed/v1/view?key=#{ENV["GOOGLE_API_KEY"]}&zoom=19&maptype=satellite"
  def self.embed_map_url(court)
    EMBED_URL + "&center=#{court.latitude}, #{court.longitude}"
  end
end
