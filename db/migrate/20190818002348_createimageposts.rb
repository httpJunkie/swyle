class Createimageposts < ActiveRecord::Migration[6.0]
  def change
      create_table :image_posts do |t|
      t.string   :title, null: false
      t.string   :description
      t.integer   :user_id, null: false
      t.datetime :created_at, null: false
  end
  add_index :image_posts, :user_id
  add_index :image_posts, :title
  end
end
