function drawSharp(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Sharp default settings
		var settings = {
			'scale': 1.0
		}
		var paths = [
			[ 5.96, 36.74],
			[ 5.63, 36.74,  5.39, 36.50,  5.39, 36.17],
			[ 5.39, 31.80, 'L'],
			[ 2.89, 32.74, 'L'],
			[ 2.89, 37.49, 'L'],
			[ 2.89, 37.82,  2.65, 38.06,  2.32, 38.06],
			[ 2.02, 38.06,  1.77, 37.82,  1.77, 37.49],
			[ 1.77, 33.13, 'L'],
			[ 0.81, 33.49, 'L'],
			[ 0.75, 33.52,  0.66, 33.52,  0.60, 33.52],
			[ 0.27, 33.52,  0.00, 33.25,  0.00, 32.92],
			[ 0.00, 31.11, 'L'],
			[ 0.00, 30.87,  0.15, 30.63,  0.39, 30.54],
			[ 1.77, 30.06, 'L'],
			[ 1.77, 25.25, 'L'],
			[ 0.81, 25.58, 'L'],
			[ 0.75, 25.61,  0.66, 25.61,  0.60, 25.61],
			[ 0.27, 25.61,  0.00, 25.37,  0.00, 25.01],
			[ 0.00, 23.20, 'L'],
			[ 0.00, 22.96,  0.15, 22.75,  0.39, 22.66],
			[ 1.77, 22.15, 'L'],
			[ 1.77, 17.40, 'L'],
			[ 1.77, 17.06,  2.02, 16.82,  2.32, 16.82],
			[ 2.65, 16.82,  2.89, 17.06,  2.89, 17.40],
			[ 2.89, 21.76, 'L'],
			[ 5.39, 20.82, 'L'],
			[ 5.39, 16.07, 'L'],
			[ 5.39, 15.74,  5.63, 15.50,  5.96, 15.50],
			[ 6.26, 15.50,  6.50, 15.74,  6.50, 16.07],
			[ 6.50, 20.43, 'L'],
			[ 7.46, 20.07, 'L'],
			[ 7.52, 20.04,  7.61, 20.04,  7.67, 20.04],
			[ 8.00, 20.04,  8.27, 20.31,  8.27, 20.64],
			[ 8.27, 22.45, 'L'],
			[ 8.27, 22.69,  8.12, 22.93,  7.88, 23.02],
			[ 6.50, 23.50, 'L'],
			[ 6.50, 28.32, 'L'],
			[ 7.46, 27.99, 'L'],
			[ 7.52, 27.95,  7.61, 27.95,  7.67, 27.95],
			[ 8.00, 27.95,  8.27, 28.20,  8.27, 28.56],
			[ 8.27, 30.36, 'L'],
			[ 8.27, 30.60,  8.12, 30.81,  7.88, 30.90],
			[ 6.50, 31.41, 'L'],
			[ 6.50, 36.17, 'L'],
			[ 6.50, 36.50,  6.26, 36.74,  5.96, 36.74],
			[ 2.89, 24.83],
			[ 2.89, 29.64, 'L'],
			[ 5.39, 28.74, 'L'],
			[ 5.39, 23.92, 'L'],
			[ 2.89, 24.83, 'L']
		];
		
		// Overing default settings with options
		jQuery.extend(settings, options);
		// Start drawing
		drawPaths(paths, ctx, position, settings);
	}
}

function drawFlat(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Flat default settings
		var settings = {
			'scale': 1.0
		}
		var paths = [
			
		];
		
		// Overing default settings with options
		jQuery.extend(settings, options);
		// Start drawing
		drawPaths(paths, ctx, position, settings);
	}
}

function drawNormal(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Normal default settings
		var settings = {
			'scale': 1.0
		}
		var paths = [
			
		];
		
		// Overing default settings with options
		jQuery.extend(settings, options);
		// Start drawing
		drawPaths(paths, ctx, position, settings);
	}
}