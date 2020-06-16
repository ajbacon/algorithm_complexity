require_relative 'timer'

def shuffle(array)
  new_array = []
  until array.empty? do
      random_index = rand array.length
      new_array << array[random_index]
      array.delete_at(random_index)
  end
  new_array
end

def runTimer()
  (50000..1000000).step(50000) do |n| 
    arr = (1..n).to_a
    Timer.get_time(arr, :shuffle)
  end
  
end

runTimer()