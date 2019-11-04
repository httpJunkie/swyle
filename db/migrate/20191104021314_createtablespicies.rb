class Createtablespicies < ActiveRecord::Migration[6.0]
  def change
      create_table :spicies do |t|
      t.integer :user_id, null: false
      t.integer :post_id, null: false
      t.string :post_type, null: false
      t.timestamps

    end
    add_index :spicies, :user_id
    add_index :spicies, :post_id
  end
end
