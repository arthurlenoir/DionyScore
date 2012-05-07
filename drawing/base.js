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

function strokePaths(paths, ctx, position, settings) 
{

	ctx.save();
	ctx.lineWidth *= settings.scale;
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
	ctx.stroke();
	ctx.restore();
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
		};
		// Overing default settings with options
		jQuery.extend(settings, options);
		
		// Scalling settings
		ctx.save();
		ctx.lineWidth *= settings.scale;
		ctx.lineCap = settings.lineCap;
		//settings.width *= settings.scale;
		settings.height *= settings.scale;
		settings.paddingTop *= settings.scale;
		
		var space = settings.height / 6.8;
		
		// Start drawing
		ctx.beginPath();
		for (var i = 0 ; i < 5 ; i++)
		{
			ctx.moveTo(position.x + ctx.lineWidth / 2, 0.5 + Math.round(settings.paddingTop + position.y + i * space));
			ctx.lineTo(position.x + settings.width, 0.5 + Math.round(settings.paddingTop + position.y + i * space));
		}
		ctx.stroke();
		ctx.restore();
	}
}

function drawBarSeparator(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Bar separator default settings
		var settings = {
			'scale': 1.0
		};
		var paths = [
			[ 0.00, 44.67],
			[ 1.38, 44.67, 'L'],
			[ 1.38, 14.87, 'L'],
			[ 0.00, 14.87, 'L'],
			[ 0.00, 44.67, 'L']
		];
		
		// Overing default settings with options
		jQuery.extend(settings, options);
		// Start drawing
		drawPaths(paths, ctx, position, settings);
	}
}
