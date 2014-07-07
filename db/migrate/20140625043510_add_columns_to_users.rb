class AddColumnsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :provider, :string
    add_column :users, :uid, :string
    add_column :users, :name, :string
    add_column :users, :zip_code, :integer
    add_column :users, :image_url, :string
    add_column :users, :game_notifications, :boolean, default: true
    add_column :users, :court_notifications, :boolean, default: true
  end
end
