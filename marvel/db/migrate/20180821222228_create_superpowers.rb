class CreateSuperpowers < ActiveRecord::Migration[5.2]
  def change
    create_table :superpowers do |t|
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
