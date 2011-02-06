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

function drawTrebleClef(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Staff default settings
		var settings = {
			'scale': 1.0
		}
		var paths = [
			[13.51, 43.32],
            [13.54, 43.90, 13.54, 44.45, 13.54, 45.03],
            [13.54, 46.16, 13.48, 47.32, 13.40, 48.45],
            [13.07, 52.02, 10.82, 55.21,  7.45, 55.21],
            [ 4.12, 55.21,  1.30, 52.69,  1.30, 49.44],
            [ 1.30, 47.76,  2.84, 46.42,  4.55, 46.42],
            [ 6.12, 46.42,  7.31, 47.82,  7.31, 49.44],
            [ 7.31, 50.95,  6.09, 52.19,  4.55, 52.19],
            [ 4.26, 52.19,  3.97, 52.13,  3.68, 52.02],
            [ 4.52, 53.21,  5.91, 53.99,  7.45, 53.99],
            [10.21, 53.99, 11.92, 51.24, 12.18, 48.31],
            [12.27, 47.21, 12.32, 46.11, 12.32, 45.00],
            [12.32, 44.54, 12.29, 44.10, 12.29, 43.64],
            [11.60, 43.78, 10.87, 43.84, 10.15, 43.84],
            [ 4.52, 43.84,  0.00, 39.20,  0.00, 33.55],
            [ 0.00, 28.18,  3.62, 24.10,  6.93, 19.89],
            [ 5.68, 16.15,  4.96, 13.40,  4.96,  9.28],
            [ 4.96,  3.68,  8.90,  0.00,  9.37,  0.00],
            [10.26,  0.00, 14.15,  6.00, 14.15, 10.84],
            [14.15, 15.25, 11.68, 18.79,  8.99, 22.24],
            [ 9.68, 24.36, 10.35, 26.48, 10.96, 28.62],
            [15.54, 28.65, 18.50, 32.42, 18.50, 36.30],
            [18.50, 39.84, 16.12, 42.45, 13.51, 43.32],
            [ 4.72, 34.45],
            [ 4.72, 31.81,  6.52, 29.23,  9.68, 28.71],
            [ 9.19, 26.91,  8.64, 25.17,  8.06, 23.40],
            [ 5.07, 27.20,  2.08, 31.00,  2.08, 35.84],
            [ 2.08, 39.58,  6.20, 42.60, 10.15, 42.60],
            [10.84, 42.60, 11.54, 42.57, 12.24, 42.42],
            [12.00, 38.77, 11.31, 35.00, 10.50, 31.72],
            [ 8.00, 31.90,  6.61, 33.52,  6.61, 35.26],
            [ 6.61, 36.59,  7.42, 38.02,  9.16, 38.88],
            [ 9.31, 39.03,  9.39, 39.17,  9.39, 39.35],
            [ 9.39, 39.67,  9.10, 39.99,  8.76, 39.99],
            [ 8.29, 39.99,  4.72, 38.31,  4.72, 34.45],
            [ 6.43, 12.41],
            [ 6.43, 13.66,  6.84, 15.66,  7.83, 18.70],
            [10.12, 15.63, 12.06, 12.41, 12.06,  8.52],
            [12.06,  6.64, 11.86,  5.86, 10.93,  4.20],
            [ 8.12,  6.00,  6.43,  9.07,  6.43, 12.41],
            [16.61, 37.35],
            [16.61, 34.77, 14.76, 32.22, 11.77, 31.78],
            [12.55, 34.97, 13.22, 38.59, 13.45, 42.10],
            [15.11, 41.47, 16.61, 39.73, 16.61, 37.35]
		]
		
		// Overing default settings with options
		jQuery.extend(settings, options);
		// Start drawing
		ctx.beginPath();
		for (var i = 0 ; i < paths.length ; i++) 
		{
			if (paths[i].length == 2) 
			{
				ctx.moveTo(paths[i][0] * settings.scale + position.x, paths[i][1] * settings.scale + position.y);
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
}
