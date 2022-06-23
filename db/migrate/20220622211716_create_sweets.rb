class CreateSweets < ActiveRecord::Migration[6.1]
  def change
    create_table :sweets do |t|
      t.text :sweet
      t.integer :user_id

      t.timestamps
    end
  end
end
