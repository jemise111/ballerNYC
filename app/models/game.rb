class Game < ActiveRecord::Base
  has_and_belongs_to_many(:users)
  belongs_to(:court)
  validates(:start_at, presence: true)
  validates(:skill_level, numericality: { only_integer: true }, allow_blank: true)
  # validate(:start_at_cannot_be_in_the_past)

  def start_at_cannot_be_in_the_past
    if start_at && start_at.to_time.to_i < Time.now.to_i
      errors.add(:start_at, 'Start time cannot be in the past')
    end
  end

  def send_game_tweet
    content = Twitter::random_tweet_content(time_info, self.court.name, self.court.id)
    Twitter::send_tweet(content, self.court.latitude, self.court.longitude)
  end

  # change name since this is for 24 hrs past
  # call it 'inactive' or 'stale'

  # make 24 a constant

  # A game is in the past if it took place more than 24 hours ago
  def past?
    start_at < (Time.now).to_datetime
  end

  def time_info
    "#{start_at.strftime("%a %D")} at #{start_at.strftime("%l:%M %P")}"
  end
end
