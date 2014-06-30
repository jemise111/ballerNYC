require 'rails_helper'

describe User do

  # it { should have_many(:comments) }
  # it { should have_and_belong_to_many(:games) }
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:name) }
  it { should validate_numericality_of(:zip_code).only_integer.is_greater_than_or_equal_to(00000).is_less_than_or_equal_to(99999) }
  it { should allow_value(nil).for(:zip_code) }

end
