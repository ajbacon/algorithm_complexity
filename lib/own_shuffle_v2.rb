require_relative 'timer'

def shuffle_own_v2(input)
  counter = input.length - 1
  while counter >= 0
    rand_index = rand(counter) - 1
    
    temp = input[counter]
    input[counter] = input[rand_index]
    input[rand_index] = temp
    counter -= 1
  end
  input
end

def runTimer()
  (50000..1000000).step(50000) do |n| 
    arr = (1..n).to_a
    Timer.get_time(arr, :shuffle_own_v2)
  end
  
end

runTimer()