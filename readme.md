# Intro.
Example to show that passing the old query string format to define loaders
causes ExtractTextPlugin to not generate a css file

# Instructions.
Execute following

````
npm install
npm run build
````
Note file `dist/theme1.css` is generated with contents of index.css

In `webpack-config.js` uncomment line 27, comment line 28.
then rerun `npm run build`. Note that `dist/theme1.css` is NOT
generated. However the content of `index.css` is now in `dist\main/js`

# Problem
ETP works properly when passed rules defined as objects (extractLoader1)
but not when stringified `using webpack-combine-loaders`