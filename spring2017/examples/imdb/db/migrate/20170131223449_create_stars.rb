class CreateStars < ActiveRecord::Migration[5.0]
  def change
    create_table :stars do |t|
      t.string :first_name
      t.string :last_name
      t.datetime :created_at

      t.timestamps
    end
  end
end
