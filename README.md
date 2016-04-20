# Framer Sticker Module
The **Sticker** module provides sticky header functionality for a ScrollComponent 

## Example
http://share.framerjs.com/6eihyxb7cidu/

## Including the Module
Place the sticker.coffee module into the `/modules` directory of your project. Then require the module at the top of your prototype.

```javascript
{StickerScrollComponent, StickerSection} = require 'Sticker'
```


## Getting Started

The `StickerScrollComponent` is a normal ScrollComponent with extra functionality to handle child `StickerSection` layers. 

A `StickerSection` takes `content` and `header` options that are the layers you wish to use in the section. By default the y position is automatically set to the bottom of the content.


```javascript
# Create the sticky headers component
sticker = new StickerScrollComponent

# Add sections
for i in [0..15] 
	section = new StickerSection	
		header:  new Layer(height: 75, backgroundColor: Utils.randomColor())	
		content: new Layer(height: 300, width: tv.width,  backgroundColor: "#e3e3e3")
		parent: sticker.content 
```
		
