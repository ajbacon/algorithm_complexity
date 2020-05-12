module Timer
  def Timer.get_time(param, callback)
    callback = method(callback)
    time_arr = []
    n = 30
    sliceArr = (0.1 * n).floor
    
    n.times do 
      t0 = Time.now
      callback.call(param)
      t1 = Time.now
      time_arr.push(t1 - t0)
    end

    time_arr.sort().slice!(sliceArr, (time_arr.length - 2 * sliceArr))
    p time_arr.reduce(:+) / (time_arr.size.to_f - sliceArr)
  end
end
