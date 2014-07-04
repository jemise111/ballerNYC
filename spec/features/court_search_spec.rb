require 'rails_helper'

feature "A user can search for courts" do

  # This test is dependent on knowing accurate search results

  # These tests also require API access
  xscenario "serach for courts with valid location search" do
    visit "/"
    fill_in "query", with: '10065'
    click_button "go"
    expect(page).to have_content("St. Catherine's Park")
  end

  xscenario "let user know no results found for invalid search" do
    visit "/"
    fill_in "query", with: '1'
    click_button "go"
    expect(page).to have_content("No courts found")
  end
end
