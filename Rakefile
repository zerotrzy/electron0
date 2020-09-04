require 'bundler/setup'

task :build do
  require 'opal' #opal-browser
  b = Opal::Builder.new
  b.append_paths __dir__+'/opal'
  build = b.build('pro').to_s
  File.write('prog.js', build)
end

task default: [:build]

