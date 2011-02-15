function drawWholeNote(ctx, position, options)
{
    if (ctx != null && isPosition(position))
    {
        // Whole note default settings
        var settings = {
            'scale': 1.0
        };
        var paths = [
            [13.70,  3.82],
			[13.70,  6.06, 10.43,  7.64,  6.86,  7.64],
			[ 2.93,  7.64,  0.00,  5.87,  0.00,  3.82],
			[ 0.00,  1.58,  3.27,  0.00,  6.86,  0.00],
			[10.77,  0.00, 13.70,  1.77, 13.70,  3.82],
			[ 4.04,  3.15],
			[ 4.04,  5.90,  6.42,  6.92,  7.75,  6.92],
			[ 9.08,  6.92,  9.66,  5.90,  9.66,  4.48],
			[ 9.66,  1.74,  7.28,  0.72,  5.95,  0.72],
			[ 4.62,  0.72,  4.04,  1.74,  4.04,  3.15]
        ];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        // Start drawing
        drawPaths(paths, ctx, position, settings);
    }
}

function drawHalfNoteHead(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Half note base default settings
		var settings = {
			'scale': 1.0
		};
		var paths = [
			[10.09,  2.22],
			[10.09,  3.30,  9.42,  5.63,  7.91,  6.64],
			[ 6.13,  7.84,  3.92,  8.13,  2.44,  8.13],
			[ 0.52,  8.13,  0.00,  7.11,  0.00,  6.00],
			[ 0.00,  4.93,  0.67,  2.60,  2.18,  1.58],
			[ 3.95,  0.39,  6.16,  0.13,  7.68,  0.13],
			[ 9.60,  0.13, 10.09,  1.12, 10.09,  2.22],
			[ 7.94,  1.03],
			[ 6.77,  1.03,  1.98,  4.32,  1.25,  5.19],
			[ 1.05,  5.42,  0.93,  5.71,  0.93,  6.00],
			[ 0.93,  6.70,  1.48,  7.20,  2.15,  7.20],
			[ 3.31,  7.20,  8.11,  3.91,  8.87,  3.04],
			[ 9.07,  2.81,  9.16,  2.51,  9.16,  2.22],
			[ 9.16,  1.53,  8.63,  1.03,  7.94,  1.03]
		];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        // Start drawing
        drawPaths(paths, ctx, position, settings);
	}
}

function drawNoteHead(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Note base default settings
		var settings = {
			'scale': 1.0
		};
		var paths = [
			[ 9.57,  2.78],
			[ 9.57,  5.39,  6.28,  8.16,  3.17,  8.16],
			[ 1.28,  8.16,  0.00,  7.08,  0.00,  5.51],
			[ 0.00,  2.89,  3.29,  0.13,  6.40,  0.13],
			[ 8.29,  0.13,  9.57,  1.21,  9.57,  2.78]
		];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        // Start drawing
        drawPaths(paths, ctx, position, settings);
	}
}

function drawLeftStem(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Right stem default settings
		var settings = {
			'scale': 1.0,
			'lineJoin': 'round'
		};
		var paths = [
			[ 0.50, 29.07],
			[ 0.86, 29.07, 'L'],
			[ 0.86,  5.58, 'L'],
			[ 0.50,  5.58, 'L'],
			[ 0.50, 29.07, 'L']
		];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        ctx.lineJoin = settings.lineJoin;
        // Start drawing
        strokePaths(paths, ctx, position, settings);
	}
}

function drawRightStem(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Left stem default settings
		var settings = {
			'scale': 1.0,
			'lineJoin': 'round'
		};
		var paths = [
			[ 8.75,   2.41],
			[ 9.11,   2.41, 'L'],
			[ 9.11, -21.08, 'L'],
			[ 8.75, -21.08, 'L'],
			[ 8.75,   2.41, 'L']
		];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        ctx.lineJoin = settings.lineJoin;
        // Start drawing
        strokePaths(paths, ctx, position, settings);
	}
}

function drawNoteNeck(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Note neck default settings
		var settings = {
			'scale': 1.0,
			'lineJoin': 'round'
		};
		var paths = [
			[ -1.75,  4.08],
			[ 11.15,  4.08, 'L'],
			[ -1.75,  4.08, 'L']
		];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        ctx.lineJoin = settings.lineJoin;
        // Start drawing
        strokePaths(paths, ctx, position, settings);
	}
}

function drawSingleFlagDown(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Note neck default settings
		var settings = {
			'scale': 1.0
		};
		var paths = [
			[ 9.15,  -21.23],
			[ 9.62,  -21.23, 'L'],
			[ 9.62,  -15.47, 15.69,  -11.49, 15.69,  -5.73],
			[15.69,  -3.67, 15.23,  -1.63, 14.47,  0.29],
			[14.35,  0.52, 14.12,  0.64, 13.92,  0.64],
			[13.54,  0.64, 13.16,  0.32, 13.25,  -0.15],
			[14.01,  -1.92, 14.47,  -3.81, 14.47,  -5.73],
			[14.47,  -8.76, 11.71,  -11.78,  9.62,  -13.96],
			[ 9.15,  -13.96, 'L'],
			[ 9.15,  -21.23, 'L']
		];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        // Start drawing
        drawPaths(paths, ctx, position, settings);
	}
}

function drawSingleFlagUp(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Note neck default settings
		var settings = {
			'scale': 1.0
		};
		var paths = [
			[ 9.19, 14.41],
			[ 9.19, 20.37,  1.37, 23.36,  1.37, 29.32],
			[ 0.90, 29.32, 'L'],
			[ 0.90, 22.05, 'L'],
			[ 1.37, 22.05, 'L'],
			[ 4.21, 20.31,  7.96, 17.66,  7.96, 14.41],
			[ 7.96, 12.52,  7.35, 10.68,  6.39,  9.05],
			[ 6.31,  8.59,  6.69,  8.27,  7.06,  8.27],
			[ 7.99,  8.27,  9.19, 11.99,  9.19, 14.41]
		];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        // Start drawing
        drawPaths(paths, ctx, position, settings);
	}
}

function drawBottomFlag(ctx, positions, options)
{
	if (ctx != null && typeof positions == 'object' && positions.length == 2 && isPosition(positions[0]) && isPosition(positions[1]))
	{
		// Bottom Flag default settings
		var settings = {
			'scale': 1.0
		};
        
        // Overing default settings with options
        jQuery.extend(settings, options);
		
		var paths = [
			[ positions[0].x, positions[0].y + 28 * settings.scale],
			[ positions[0].x, positions[0].y + 30.91 * settings.scale, 'L'],
			[ positions[1].x + 1.37 * settings.scale, positions[1].y + 30.91 * settings.scale, 'L'],
			[ positions[1].x + 1.37 * settings.scale, positions[1].y + 28 * settings.scale, 'L']
		];
		
		settings.scale = 1.0;
        // Start drawing
        drawPaths(paths, ctx, {'x': 0, 'y': 0}, settings);
	}
}

function drawTopFlag(ctx, positions, options)
{
	if (ctx != null && typeof positions == 'object' && positions.length == 2 && isPosition(positions[0]) && isPosition(positions[1]))
	{
		// Top Flag default settings
		var settings = {
			'scale': 1.0
		};
        
        // Overing default settings with options
        jQuery.extend(settings, options);
		var paddingLeft = 8.24;
		var paddingTop = -22.75;
		var paths = [
			[ positions[0].x + paddingLeft * settings.scale, positions[0].y + paddingTop * settings.scale],
			[ positions[0].x + paddingLeft * settings.scale, positions[0].y + (paddingTop + 2.91) * settings.scale, 'L'],
			[ positions[1].x + paddingLeft * settings.scale + 1.37 * settings.scale, positions[1].y + (paddingTop + 2.91) * settings.scale, 'L'],
			[ positions[1].x + paddingLeft * settings.scale + 1.37 * settings.scale, positions[1].y + paddingTop * settings.scale, 'L']
		];
		
		settings.scale = 1.0;
        // Start drawing
        drawPaths(paths, ctx, {'x': 0, 'y': 0}, settings);
	}
}

function drawDot(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Dot default settings
		var settings = {
			'scale': 1.0
		};
		var paths = [
			[14.13,  2.50],
			[15.03,  2.50, 15.76,  3.23, 15.76,  4.13],
			[15.76,  5.03, 15.03,  5.76, 14.13,  5.76],
			[13.23,  5.76, 12.50,  5.03, 12.50,  4.13],
			[12.50,  3.23, 13.23,  2.50, 14.13,  2.50]
		];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        // Start drawing
        drawPaths(paths, ctx, position, settings);
	}
}
