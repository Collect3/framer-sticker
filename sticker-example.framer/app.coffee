{StickerScrollComponent, StickerSection} = require 'Sticker'

images = [
	["https://images.unsplash.com/photo-1440589473619-3cde28941638", "Roksolana Zasiadko", ""],
	[ "https://images.unsplash.com/photo-1460400355256-e87506dcec4f", "veeterzy", ""],
	["https://images.unsplash.com/photo-1460750860062-82a52139a0d6","Sweet Ice Cream Photography", "Ceningan island, Indonesia"],
	["https://images.unsplash.com/photo-1440227537815-f4476b789291", "Marat Gilyadzinov", "Пекин, Beijing, China"]
	
	[ "https://images.unsplash.com/photo-1460574283810-2aab119d8511", "Julien Moreau", "The Broad, Los Angeles, United States"],
	
	[ "https://images.unsplash.com/photo-1460626399219-57a00a2361cb", "Lukas Budimaier", "Salzburg, Austria" ],
	
	[ "https://images.unsplash.com/photo-1453668069544-b8dbea7a0477", "Kamesh Vedula","Cupertino, United States"],
	[ "https://images.unsplash.com/photo-1453230806017-56d81464b6c5", "Vladimir Kudinov", "Manhattan, New York, United States", ],
	[ "https://images.unsplash.com/photo-1452573992436-6d508f200b30", "Maico Amorim","Curitiba, Brazil"],
	[ "https://images.unsplash.com/photo-1458724338480-79bc7a8352e4", "Samuel Scrimshaw", ""],
   ["https://images.unsplash.com/photo-1456318019777-ccdc4d5b2396","jamie mink","Great Ocean Road, Wye River, Australia"] 
]

# Create the sticky headers component
sticker = new StickerScrollComponent

# Add in a non sticky header as the component will treat any content that
# isn't a StickerSection normally
screenHeader = new Layer
	width: sticker.width
	height: sticker.width * 1.50
	parent: sticker.content
	html: '<h1 class="screen-header">Sticker<br/>Component</h1>'
	style: { 'background-image' : "linear-gradient(0deg, #FFD1C0 0%, #D61E78 100%)" }
	
# Add sections
for image, i in images

	# Make a header
	header = new Layer
		height: 116
		backgroundColor: "rgba(255,255,255,0.70)"
		html: '<p class="header">' + image[1] + '</p>'
		style: {'-webkit-backdrop-filter': 'blur(30px)'} 
		
	# Make some content.
	contentSize = { width: Screen.width, height: Screen.width }
	content = new Layer
		height: contentSize.height
		width:  contentSize.width
		image:  image[0] + "?fit=crop&h=" + contentSize.height + "&w=" + contentSize.width
		
	# Put a label in the content	
	contentTitleLabel = new Layer
		y: content.height - 100
		width: 800
		height: 50		
		backgroundColor: null
		parent: content
		html: '<p class="content">' + image[2] + '</p>'
			
	# Create the section. By default it will set the y position
	# to after the last item in the scroll component
	section = new StickerSection
		header: header
		content: content
		parent: sticker.content
		backgroundColor: "white"
