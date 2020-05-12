require_relative 'timer'

def shuffle_own_v1(input)
  counter = input.length - 1
  while counter >= 0
    rand_index = rand(counter) - 1
    
    input[counter], input[rand_index] = input[rand_index], input[counter] 
    counter -= 1
  end
  input
end

def runTimer()
  (50000..1000000).step(50000) do |n| 
    arr = (1..n).to_a
    Timer.get_time(arr, :shuffle_own_v1)
  end
  
end

runTimer()