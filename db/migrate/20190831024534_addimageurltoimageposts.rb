class Addimageurltoimageposts < ActiveRecord::Migration[6.0]
 def up
    add_attachment :image_posts, :image
  end

  def down
    remove_attachment :image_posts, :image
  end
end
