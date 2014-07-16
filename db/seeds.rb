# require 'open-uri'
#
# boroughs = {'X' => 'Bronx',
#             'B' => 'Brooklyn',
#             'M' => 'Manhattan',
#             'Q' => 'Queens',
#             'R' => 'Staten Island'}
#
# courts = Crack::XML.parse(open("http://www.nycgovparks.org/bigapps/DPR_Basketball_001.xml"))
# courts['basketball']['facility'].each do |c|
# Court.create(name: c['Name'],
#              location: c['Location'],
#              borough: boroughs[c['Prop_ID'][0]],
#              # num_courts is 0 for 'unknown number of courts'
#              num_courts: c['Num_of_Courts'].to_i,
#              latitude: c['lat'].to_f,
#              longitude: c['lon'].to_f)
# end

# g1 = Court.find(315).games.create(start_at: DateTime.now + 10)
# g2 = Court.find(315).games.create(start_at: DateTime.now + 15)
#
# u1 = User.create(email: 'joe@shmo.com', name: 'joe', password: 'joeshmo123', password_confirmation: 'joeshmo123')
# u2 = User.create(email: 'joey@shmo.com', name: 'joey', password: 'joeshmo123', password_confirmation: 'joeshmo123')
#
# g1.users << u1 << u2 << User.find(1)
# g2.users << u1 << User.find(1)
