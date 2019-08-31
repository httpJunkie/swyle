class Reattemptaddcolumn < ActiveRecord::Migration[6.0]
  def change
    add_column :image_posts, :image_url, :string
  end
end
