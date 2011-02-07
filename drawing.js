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
		];
		
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

function drawBassClef(ctx, position, options) 
{
	if (ctx != null && isPosition(position))
	{
		// Staff default settings
		var settings = {
			'scale': 1.0
		}
		var paths = [
			[15.43, 22.20],
			[15.43, 29.74,  7.89, 34.07,  0.63, 37.14],
			[ 0.54, 37.23,  0.46, 37.26,  0.37, 37.26],
			[ 0.17, 37.26,  0.00, 37.08,  0.00, 36.88],
			[ 0.00, 36.80,  0.03, 36.71,  0.11, 36.63],
			[ 5.91, 33.27, 11.93, 29.02, 11.93, 22.49],
			[11.93, 19.04, 10.13, 15.75,  7.03, 15.75],
			[ 4.90, 15.75,  3.33, 17.29,  2.61, 19.36],
			[ 2.93, 19.22,  3.27, 19.13,  3.58, 19.13],
			[ 5.19, 19.13,  6.45, 20.42,  6.45, 22.00],
			[ 6.45, 23.66,  5.22, 25.04,  3.58, 25.04],
			[ 1.89, 25.04,  0.37, 23.69,  0.37, 22.00],
			[ 0.37, 18.21,  3.30, 15.00,  7.03, 15.00],
			[11.96, 15.00, 15.43, 17.52, 15.43, 22.20],
			[17.81, 17.49],
			[18.64, 17.49, 19.27, 18.15, 19.27, 18.96],
			[19.27, 19.76, 18.64, 20.42, 17.81, 20.42],
			[17.01, 20.42, 16.35, 19.76, 16.35, 18.96],
			[16.35, 18.15, 17.01, 17.49, 17.81, 17.49],
			[17.81, 24.67],
			[18.64, 24.67, 19.27, 25.33, 19.27, 26.13],
			[19.27, 26.93, 18.64, 27.59, 17.81, 27.59],
			[17.01, 27.59, 16.35, 26.93, 16.35, 26.13],
			[16.35, 25.33, 17.01, 24.67, 17.81, 24.67],
		];
		
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

function drawAltoClef(ctx, position, options) 
{
	if (ctx != null && isPosition(position))
	{
		// Staff default settings
		var settings = {
			'scale': 1.0
		}
		var paths = [
			[ 0.30, 42.07],
			[ 0.12, 42.07,  0.00, 41.95,  0.00, 41.77],
			[ 0.00, 18.30, 'L'],
			[ 0.00, 18.12,  0.12, 18.00,  0.30, 18.00],
			[ 3.07, 18.00, 'L'],
			[ 3.25, 18.00,  3.37, 18.12,  3.37, 18.30],
			[ 3.37, 41.77, 'L'],
			[ 3.37, 41.95,  3.25, 42.07,  3.07, 42.07],
			[ 0.30, 42.07, 'L'],
			[ 8.97, 31.75],
			[ 9.69, 31.75, 10.29, 30.94, 11.04, 30.94],
			[14.02, 30.94, 16.52, 33.17, 16.52, 36.06],
			[16.52, 40.09, 14.41, 42.07, 10.35, 42.07],
			[ 8.37, 42.07,  6.71, 40.60,  6.71, 38.67],
			[ 6.71, 37.68,  7.52, 36.87,  8.52, 36.87],
			[ 9.51, 36.87, 10.35, 37.68, 10.35, 38.67],
			[10.35, 39.61,  9.27, 39.61,  9.27, 40.51],
			[ 9.27, 41.02,  9.78, 41.35, 10.35, 41.35],
			[13.09, 41.35, 13.60, 39.18, 13.60, 36.06],
			[13.60, 33.47, 13.30, 31.66, 11.04, 31.66],
			[ 9.39, 31.66,  8.34, 33.35,  8.34, 35.15],
			[ 8.34, 35.39,  8.15, 35.51,  7.97, 35.51],
			[ 7.79, 35.51,  7.58, 35.39,  7.58, 35.15],
			[ 7.58, 33.38,  6.86, 31.69,  5.60, 30.49],
			[ 5.60, 41.77, 'L'],
			[ 5.60, 41.95,  5.45, 42.07,  5.30, 42.07],
			[ 4.78, 42.07, 'L'],
			[ 4.60, 42.07,  4.48, 41.95,  4.48, 41.77],
			[ 4.48, 18.30, 'L'],
			[ 4.48, 18.12,  4.60, 18.00,  4.78, 18.00],
			[ 5.30, 18.00, 'L'],
			[ 5.45, 18.00,  5.60, 18.12,  5.60, 18.30],
			[ 5.60, 29.59, 'L'],
			[ 6.86, 28.38,  7.58, 26.70,  7.58, 24.92],
			[ 7.58, 24.68,  7.79, 24.56,  7.97, 24.56],
			[ 8.15, 24.56,  8.34, 24.68,  8.34, 24.92],
			[ 8.34, 26.73,  9.39, 28.41, 11.04, 28.41],
			[13.30, 28.41, 13.60, 26.61, 13.60, 24.02],
			[13.60, 20.89, 13.09, 18.75, 10.35, 18.75],
			[ 9.78, 18.75,  9.27, 19.05,  9.27, 19.56],
			[ 9.27, 20.47, 10.35, 20.47, 10.35, 21.40],
			[10.35, 22.39,  9.51, 23.21,  8.52, 23.21],
			[ 7.52, 23.21,  6.71, 22.39,  6.71, 21.40],
			[ 6.71, 19.47,  8.37, 18.00, 10.35, 18.00],
			[14.41, 18.00, 16.52, 19.99, 16.52, 24.02],
			[16.52, 26.91, 14.02, 29.13, 11.04, 29.13],
			[10.29, 29.13,  9.69, 28.32,  8.97, 28.32],
			[ 8.12, 28.32,  7.97, 29.16,  7.97, 30.04],
			[ 7.97, 30.79,  8.06, 31.75,  8.97, 31.75]
		];
		
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
}

function drawTabClef(ctx, position, options) 
{
	if (ctx != null && isPosition(position))
	{
		// Staff default settings
		var settings = {
			'scale': 1.0
		}
		var paths = [
			[ 1.90, 32.79],
			[ 3.47, 32.79,  7.44, 28.19,  8.87, 23.83],
			[ 9.10, 23.19,  9.65, 22.99, 10.20, 22.99],
			[10.86, 22.99, 11.49, 23.31, 11.49, 23.68],
			[11.09, 32.44, 11.17, 32.79, 11.57, 32.79],
			[11.95, 32.79, 12.64, 32.33, 12.84, 32.33],
			[12.95, 32.33, 13.04, 32.50, 13.04, 32.70],
			[13.04, 32.87, 12.98, 33.07, 12.78, 33.13],
			[12.06, 33.36, 11.46, 33.93, 10.77, 33.93],
			[10.02, 33.93,  9.22, 33.13,  8.85, 28.19],
			[ 8.24, 29.00,  7.58, 29.77,  6.86, 30.52],
			[ 7.32, 31.35,  8.21, 31.26,  8.59, 31.26],
			[ 8.70, 31.26,  8.76, 31.44,  8.76, 31.61],
			[ 8.76, 32.18,  7.90, 32.27,  7.47, 32.27],
			[ 6.75, 32.27,  6.20, 31.98,  5.89, 31.49],
			[ 5.00, 32.30, 'L'],
			[ 4.02, 33.13,  2.93, 33.91,  1.90, 33.91],
			[ 1.21, 33.91,  0.00, 33.16,  0.00, 32.99],
			[ 0.00, 32.73,  0.26, 32.33,  0.57, 32.33],
			[ 0.83, 32.33,  1.38, 32.79,  1.90, 32.79],
			[ 4.14, 39.96],
			[ 3.13, 39.96,  2.18, 39.30,  2.18, 38.27],
			[ 2.18, 36.38,  4.91, 35.28,  7.55, 35.28],
			[ 9.91, 35.28, 12.52, 35.77, 12.52, 37.64],
			[12.52, 38.64, 11.83, 39.59, 10.91, 40.17],
			[12.23, 40.42, 13.27, 41.00, 13.27, 42.26],
			[13.27, 44.10, 11.29, 45.88,  9.13, 45.88],
			[ 7.52, 45.88,  6.61, 44.79,  6.61, 44.50],
			[ 6.61, 44.24,  6.98, 43.93,  7.24, 43.93],
			[ 7.58, 43.93,  7.58, 44.50,  8.50, 44.50],
			[ 9.48, 44.50, 10.68, 43.61, 10.68, 42.38],
			[10.68, 41.31,  9.53, 40.91,  8.36, 40.91],
			[ 8.21, 40.91,  8.16, 40.74,  8.16, 40.57],
			[ 8.16, 40.31,  8.27, 39.99,  8.59, 39.99],
			[ 9.42, 39.99, 10.17, 39.10, 10.17, 38.21],
			[10.17, 37.78,  9.99, 36.81,  8.33, 36.49],
			[ 7.41, 41.54, 'L'],
			[ 6.95, 43.90,  5.46, 46.17,  3.76, 46.17],
			[ 2.79, 46.17,  2.21, 45.42,  1.55, 44.96],
			[ 1.46, 44.90,  1.44, 44.85,  1.44, 44.76],
			[ 1.44, 44.50,  1.72, 44.16,  1.98, 44.16],
			[ 2.36, 44.16,  2.81, 45.02,  3.68, 45.02],
			[ 5.17, 45.02,  5.71, 42.72,  5.71, 40.54],
			[ 5.71, 40.34, 'L'],
			[ 5.71, 39.53,  5.89, 37.84,  6.12, 36.61],
			[ 5.20, 36.92,  4.51, 37.52,  4.51, 38.21],
			[ 4.51, 38.93,  5.08, 38.85,  5.08, 39.36],
			[ 5.08, 39.59,  5.08, 39.96,  4.14, 39.96],
			[ 4.62, 17.74],
			[ 3.50, 17.74,  2.53, 16.91,  2.53, 15.81],
			[ 2.53, 13.60,  5.54, 13.06,  7.87, 13.06],
			[ 8.93, 13.06, 10.60, 14.00, 11.77, 14.00],
			[13.41, 14.00, 14.24, 13.00, 14.50, 13.00],
			[14.76, 13.00, 15.05, 13.26, 15.05, 13.43],
			[15.05, 13.60, 13.58, 15.15, 11.60, 15.15],
			[11.20, 15.15, 10.88, 15.10, 10.60, 15.01],
			[10.40, 16.36, 10.02, 18.51,  9.79, 19.46],
			[ 9.30, 21.64,  7.75, 23.71,  6.06, 23.71],
			[ 4.91, 23.71,  4.34, 22.82,  3.42, 22.22],
			[ 3.33, 22.16,  3.30, 22.10,  3.30, 22.02],
			[ 3.30, 21.76,  3.56, 21.41,  3.82, 21.41],
			[ 4.22, 21.41,  4.85, 22.53,  5.71, 22.53],
			[ 7.96, 22.53,  7.58, 18.23,  8.19, 14.29],
			[ 7.90, 14.23,  7.64, 14.18,  7.44, 14.18],
			[ 6.03, 14.18,  4.85, 14.84,  4.85, 15.79],
			[ 4.85, 16.70,  5.57, 16.59,  5.57, 17.19],
			[ 5.57, 17.51,  5.37, 17.74,  4.62, 17.74]
		];
		
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
}

function drawPercussionsClef(ctx, position, options) 
{
	if (ctx != null && isPosition(position))
	{
		// Staff default settings
		var settings = {
			'scale': 1.0
		}
		var paths = [
			[ 0.30, 37.04],
			[ 0.15, 37.04,  0.00, 36.92,  0.00, 36.74],
			[ 0.00, 22.30, 'L'],
			[ 0.00, 22.12,  0.15, 22.00,  0.30, 22.00],
			[ 3.10, 22.00, 'L'],
			[ 3.28, 22.00,  3.40, 22.12,  3.40, 22.30],
			[ 3.40, 36.74, 'L'],
			[ 3.40, 36.92,  3.28, 37.04,  3.10, 37.04],
			[ 0.30, 37.04, 'L'],
			[ 6.95, 37.04],
			[ 6.77, 37.04,  6.65, 36.92,  6.65, 36.74],
			[ 6.65, 22.30, 'L'],
			[ 6.65, 22.12,  6.77, 22.00,  6.95, 22.00],
			[ 9.72, 22.00, 'L'],
			[ 9.90, 22.00, 10.02, 22.12, 10.02, 22.30],
			[10.02, 36.74, 'L'],
			[10.02, 36.92,  9.90, 37.04,  9.72, 37.04],
			[ 6.95, 37.04, 'L']
		];
		
		// Overing default settings with options
		jQuery.extend(settings, options);
		// Start drawing
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
}