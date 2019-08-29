class Add < ActiveRecord::Migration[6.0]
  def change
     add_column :comments, :post_type, :string
  end
end
