# require 'sinatra'
# require 'sinatra/reloader' if development? 
class CaesarCipher
	def self.caesar_cipher(text_to_encode, num)
		encoded_word = ""
		letters = ("a".."z").to_a
		if !text_to_encode.nil? && !num.nil?
			encoded_word = text_to_encode.chars.map{|c| 
				if c.downcase == 'z'
					c = ('a'.ord + num - 1).chr
				else
					letters.include?(c.downcase) ? (c.ord + num).chr : c
				end
			}.join
		end
		encoded_word
	end
end
# get '/caesar_cipher' do
# 	word = params["word"]
# 	num = params["number"].to_i
# 	word = caesar_cipher(word, num)
# 	erb :caesar_cipher_index, :locals => {:word => word}
# end