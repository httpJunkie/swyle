class Createtags < ActiveRecord::Migration[6.0]
  def change
    create_table :tags do |t|
      t.string :title, null: false
    end
    add_index :tags, :title
  end
end
