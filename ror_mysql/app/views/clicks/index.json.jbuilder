json.array!(@clicks) do |click|
  json.extract! click, :id, :widgetID, :time, :click
  json.url click_url(click, format: :json)
end
