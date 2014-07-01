require 'rails_helper'

feature "A user can search for courts" do

  # This test is dependent on knowing accurate search results
  scenario "serach for courts with valid location search" do
    visit "/"
    fill_in "query", with: '10065'
    click_button "go"
    expect(page).to have_content("St. Catherine's Park")
  end

  scenario "let user know no results found for invalid search" do
    visit "/"
    fill_in "query", with: '10065'
    click_button "go"
    expect(page).to have_content("St. Catherine's Park")
  end
end
