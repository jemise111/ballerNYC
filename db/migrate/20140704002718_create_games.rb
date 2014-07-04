class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.datetime :start_at
      t.integer :skill_level
      t.integer :creator_id
      t.references :court

      t.timestamps
    end
  end
end
