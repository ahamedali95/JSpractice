class CreateSuperheros < ActiveRecord::Migration[5.2]
  def change
    create_table :superheros do |t|
      t.string :name
      t.integer :superpower_id

      t.timestamps
    end
  end
end
