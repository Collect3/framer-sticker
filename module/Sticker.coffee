class StickerSection extends Layer
	constructor: (options) ->
		options ?= {}
		options.backgroundColor ?= null
		options.parent ?= options.superLayer
		options.width ?= options.parent.width
		options.height?= options.header.height + options.content.height
		if not options.y
			[..., lastSectionItem] = options.parent.children
			options.y = if lastSectionItem then (lastSectionItem.y + lastSectionItem.height) else 0			
		super options
		@.content = options.content		
		@.content.parent = @
		@.header = options.header
		@.header.parent = @
		@.layout()
	layout:() ->
		@.content.y = @.header.height
		@.content.centerX()
		@.header.width  = @.width
	totalHeight:() ->
		return @.content.height + @.header.height

class StickerScrollComponent extends ScrollComponent
	constructor: (options) ->
		options ?= {}
		options.scrollHorizontal ?= false
		options.width  ?= Screen.width
		options.height ?= Screen.height
		super options
		@.content.on "change:y", => @.layout()
		
	# Convenience function to add a section in 
	add:(header, content) ->
		return new StickerSection
					header: header
					content: content
					parent: @.content
	topChild:() ->
		first = null
		for section in @.content.children by -1
			continue if not section.header
			first = section
			# Ensure header is reset
			section.header.y = 0
			
			sectionScreenFrame = section.screenFrame
			return section if sectionScreenFrame.y < 0 && (sectionScreenFrame.y + sectionScreenFrame.height) > 0
		return first
		
	layout:() ->
		return if @.content.children.count == 0
		section = @.topChild()
		# Shift the header based on how much it's offset
		section.header.y = Math.max(Math.min(-section.screenFrame.y, section.height - section.header.height), 0)

module.exports = {
	StickerScrollComponent: StickerScrollComponent,
	StickerSection: StickerSection
}