class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.string :user_id, null: false
      t.string :post_id, null: false
      t.timestamps
    end
    add_index :comments, :user_id
    add_index :comments, :post_id
  end
end
