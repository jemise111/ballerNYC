require 'rails_helper'

feature "A user can sign up and sign in" do

  background { valid_sign_in_with_facebook }

  scenario "facebook sign in with valid facebook credentials" do
    expect(page).to have_content('Successfully authenticated')
  end

  scenario "signing up with valid credentails" do
    sign_up('Jesse Sessler', 'jesse.sessler@gmail.com', 'abc12345', 10065)
    expect(page).to have_content('signed up successfully')
  end

  scenario "signing in with valid username and password" do
    sign_up('Jesse Sessler', 'jesse.sessler@gmail.com', 'abc12345', 10065)
    sign_in('Jesse.sessler@gmail.com', 'abc12345')
    expect(page).to have_content('Signed in successfully')
  end

  scenario "should not sign in a user with an invalid username and password" do
    sign_in("jesse@sessler.com", "wrong")
    expect(page).to have_content("Invalid email or password")
  end
end
