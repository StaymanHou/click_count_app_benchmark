class CreateClicks < ActiveRecord::Migration
  def change
    create_table :clicks, {id: false} do |t|
      t.integer :widgetID
      t.timestamp :time
      t.integer :click

      t.timestamps
    end
    execute 'ALTER TABLE clicks ADD PRIMARY KEY (widgetID, time);'
  end
end
