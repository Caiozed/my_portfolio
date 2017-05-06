require 'sinatra'
require './scripts/caesar_cipher'
require './scripts/mastermind'
require 'sinatra/reloader' if development? 

get '/' do
	erb :index
end

get '/caesar_cipher' do
	word = params["word"]
	num = params["number"].to_i
	word = CaesarCipher.caesar_cipher(word, num)
	erb :caesar_cipher_index, :locals => {:word => word}
end

get '/mastermind' do
	game = Mastermind.new
	game.create
	erb :mastermind_index, :locals => {:board_x => game.board_size_x,
										:board_y => game.board_size_y,
										:board => game.board,
										:colors => game.colors
									}
end