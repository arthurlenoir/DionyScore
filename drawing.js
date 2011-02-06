function buildContext(canvas, options) 
{
	// Test for browser no-compliant with canvas
	if (canvas && canvas.getContext) 
	{
		// Getting the 2d context of the canvas
		var ctx = canvas.getContext('2d');
		
		// Configuring the context 
		jQuery.extend(ctx, options);
		
		return ctx;
	}
	return null;
}

function isPosition(position)
{
	if (typeof position == "object") 
	{
		if (typeof position.x == "number" && typeof position.y == "number")
		{
			return true;
		}
	}
	return false;
}

function drawStaff(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Staff default settings
		var settings = {
			'width': 200,
			'height': 50,
			'paddingTop': 15,
			'scale': 1.0
		}
		// Overing default settings with options
		jQuery.extend(settings, options);
		
		// Scalling settings
		ctx.lineWidth *= settings.scale;
		settings.width *= settings.scale;
		settings.height *= settings.scale;
		settings.paddingTop *= settings.scale;
		
		var space = settings.height / 6.8;
		
		// Start drawing
		ctx.beginPath();
		ctx.moveTo(position.x + ctx.lineWidth, Math.round(settings.paddingTop + position.y));
		ctx.lineTo(position.x + ctx.lineWidth, Math.round(settings.paddingTop + position.y + 4 * space));
		ctx.moveTo(position.x + 2 * ctx.lineWidth, Math.round(settings.paddingTop + position.y));
		ctx.lineTo(position.x + 2 * ctx.lineWidth, Math.round(settings.paddingTop + position.y + 4 * space));
		for (var i = 0 ; i < 5 ; i++)
		{
			ctx.moveTo(position.x, 0.5 + Math.round(settings.paddingTop + position.y + i * space));
			ctx.lineTo(position.x + settings.width, 0.5 + Math.round(settings.paddingTop + position.y + i * space));
		}
		ctx.stroke();
	}
}
