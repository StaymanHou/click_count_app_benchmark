class Click < ActiveRecord::Base
  def self.hit(wid)
    time = Time.new.beginning_of_hour
    Click.create(widgetID: wid, time: time, click: 1) if 0 == (Click.where(widgetID: wid, time: time).update_all 'click = COALESCE(click, 0) + 1')
  end
end

