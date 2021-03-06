require_relative 'timer'

def shuffle_ruby(input)
  input.shuffle()
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
    output_arr.push(Timer.get_time(arr, :shuffle_ruby))
  end

  print_output(output_arr)
end


runTimer(50000,1000000)