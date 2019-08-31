class Removeattachments < ActiveRecord::Migration[6.0]
  def change
     remove_attachment :image_posts, :image
  end
end
