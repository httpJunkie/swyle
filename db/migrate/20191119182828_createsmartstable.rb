class Createsmartstable < ActiveRecord::Migration[6.0]
  def change
      create_table :smarts do |t|
      t.integer :user_id, null: false
      t.integer :post_id, null: false
      t.string :post_type, null: false
      t.timestamps

    end
    add_index :smarts, :user_id
    add_index :smarts, :post_id
  end
end
