class Createarticles < ActiveRecord::Migration[6.0]
  def change
     create_table :articles do |t|
      t.text :body
      t.text :snippet
      t.string :title
      t.integer :user_id
      t.timestamps
    end
     add_index :articles, :title
  end
end
