def own_shuffle(input)
  counter = input.length - 1
  while counter >= 0
    rand_index = rand(counter) - 1
    
    input[counter], input[rand_index] = input[rand_index], input[counter] 
    counter -= 1
  end
  input
end

def shuffle_time
  size_arr = [500000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000, 4000000, 4500000, 5000000 ]

  size_arr.each do |size|
    arr = (1..size).to_a
    t0 = Process.clock_gettime(Process::CLOCK_MONOTONIC, :nanosecond)
    own_shuffle(arr)
    t1 = Process.clock_gettime(Process::CLOCK_MONOTONIC, :nanosecond)
    p t1 - t0
  end
end

shuffle_time