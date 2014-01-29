
get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index
end

post '/grandma/' do
  input = params.keys[0]

  input.upcase != input ? "SPEAK UP SONNY" : "Whatever, dude"
end
