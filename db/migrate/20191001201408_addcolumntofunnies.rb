class Addcolumntofunnies < ActiveRecord::Migration[6.0]
  def change
     add_column :funnies, :post_type, :string
  end
end
