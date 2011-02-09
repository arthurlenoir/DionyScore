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

function drawPaths(paths, ctx, position, settings) 
{
	ctx.beginPath();
	ctx.moveTo(position.x, position.y);
	for (var i = 0 ; i < paths.length ; i++) 
	{
		if (paths[i].length == 2) 
		{
			ctx.moveTo(paths[i][0] * settings.scale + position.x, paths[i][1] * settings.scale + position.y);
		}
		else if (paths[i].length == 3) 
		{
			ctx.lineTo(paths[i][0] * settings.scale + position.x, paths[i][1] * settings.scale + position.y);
		}
		else if (paths[i].length == 6)
		{
			ctx.bezierCurveTo(paths[i][0] * settings.scale + position.x, paths[i][1] * settings.scale + position.y, 
							  paths[i][2] * settings.scale + position.x, paths[i][3] * settings.scale + position.y, 
							  paths[i][4] * settings.scale + position.x, paths[i][5] * settings.scale + position.y);
		} 
	}
	ctx.fill();
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
			'scale': 1.0,
			'lineCap': 'round'
		}
		// Overing default settings with options
		jQuery.extend(settings, options);
		
		// Scalling settings
		ctx.lineWidth *= settings.scale;
		ctx.lineCap = settings.lineCap;
		settings.width *= settings.scale;
		settings.height *= settings.scale;
		settings.paddingTop *= settings.scale;
		
		var space = settings.height / 6.8;
		
		// Start drawing
		ctx.beginPath();
		//ctx.moveTo(position.x + ctx.lineWidth, Math.round(settings.paddingTop + position.y));
		//ctx.lineTo(position.x + ctx.lineWidth, Math.round(settings.paddingTop + position.y + 4 * space));
		for (var i = 0 ; i < 5 ; i++)
		{
			ctx.moveTo(position.x + ctx.lineWidth / 2, 0.5 + Math.round(settings.paddingTop + position.y + i * space));
			ctx.lineTo(position.x + settings.width, 0.5 + Math.round(settings.paddingTop + position.y + i * space));
		}
		ctx.stroke();
	}
}