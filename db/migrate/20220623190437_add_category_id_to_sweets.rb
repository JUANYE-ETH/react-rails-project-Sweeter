class AddCategoryIdToSweets < ActiveRecord::Migration[6.1]
  def change
    add_column :sweets, :category_id, :integer
  end
end
