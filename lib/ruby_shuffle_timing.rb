def shuffle_time
  size_arr = [500000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000, 4000000, 4500000, 5000000 ]

  size_arr.each do |size|
    arr = (1..size).to_a
    t0 = Time.now
    arr.shuffle
    t1 = Time.now
    p t1 - t0
  end
end

shuffle_time
