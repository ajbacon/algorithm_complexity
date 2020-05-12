require_relative 'timer'

def shuffle_ruby(input)
  input.sort()
end

def runTimer()
  (50000..1000000).step(50000) do |n| 
    arr = (1..n).to_a.shuffle()
    Timer.get_time(arr, :shuffle_ruby)
  end
  
end

runTimer()