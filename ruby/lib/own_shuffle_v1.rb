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

def print_output(arr)
  arr.each { |elm| p elm }
end

def runTimer(inResolution = 50000, inMax = 1500000)
  resolution = inResolution
  max = inMax
  output_arr = []

  (resolution..max).step(resolution) do |n| 
    arr = (1..n).to_a
    output_arr.push(Timer.get_time(arr, :shuffle_own_v1))
  end

  print_output(output_arr)
end


runTimer(50000,1000000)