class AddColumnToLikesTable < ActiveRecord::Migration[6.0]
  def change
    add_column :likes, :post_type, :string
  end
end
