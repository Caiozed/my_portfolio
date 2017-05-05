class Mastermind
	attr_reader :board, :board_size_x, :board_size_y, :color
	attr_accessor :on_game, :turn_swap

	def initialize
		@board_size_x = 20
		@board_size_y = 5
		@color = "blue"
		@colors = ["blue", "orange", "red", "white", "green", "yellow", "pink"]
		@hit = 0 
		@board = Hash.new{|h, k| h[k] = []}
	end

	def create
		for i in 0..@board_size_x 
			for j in 0..@board_size_y 
				@board[i][j] = @colors[rand(0.. @colors.length-1)]
			end
		end                                          
	end

	def change_color(color)
		@color = color
	end

	def change_turn
		
	end

	def check_winner(x, y)

	end

	def restart 
	end

end

