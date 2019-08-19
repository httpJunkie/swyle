class Removesessiontokenfromusertable < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :session_token
  end
end
