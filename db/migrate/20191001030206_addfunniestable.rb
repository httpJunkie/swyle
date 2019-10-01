
class Addfunniestable < ActiveRecord::Migration[6.0]
  def change
      create_table :funnies do |t|
      t.integer :user_id, null: false
      t.integer :post_id, null: false
      t.timestamps

    end
    add_index :funnies, :user_id
    add_index :funnies, :post_id
  end
end
