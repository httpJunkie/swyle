class Addcolorschemetousertable < ActiveRecord::Migration[6.0]
def change
     add_column :users, :color_scheme, :string, default: "standard"
  end
end
