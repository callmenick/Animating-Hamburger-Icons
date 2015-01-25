# syntax
preferred_syntax = :scss

# paths
http_path = '/'
css_dir = '../css'
sass_dir = 'sass'
relative_assets = true

# style
line_comments = false
output_style = :expanded

# autoprefixer
require 'autoprefixer-rails'
on_stylesheet_saved do |file|
  css = File.read(file)
  File.open(file, 'w') do |io|
    io << AutoprefixerRails.process(css)
  end
end