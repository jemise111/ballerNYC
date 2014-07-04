require 'rails_helper'

describe User do

  # it { should have_many(:comments) }
  it { should have_and_belong_to_many(:games) }
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:name) }
  it { should validate_numericality_of(:zip_code).only_integer.is_greater_than_or_equal_to(00000).is_less_than_or_equal_to(99999) }
  it { should allow_value(nil).for(:zip_code) }

  subject(:jesse) { User.create(name: 'Jesse Sessler', email: 'jesse.sessler@gmail.com',
                               password: 'abc12345', password_confirmation: 'abc12345',
                               zip_code: 10065) }
  describe '.new' do
    it 'should be created with a name, email, zip code' do
      expect(jesse.name).to eq('Jesse Sessler')
      expect(jesse.email).to eq('jesse.sessler@gmail.com')
      expect(jesse.zip_code).to eq(10065)
    end
  end

end
