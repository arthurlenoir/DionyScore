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
			[10.09,  2.22],
			[10.09,  3.30,  9.42,  5.63,  7.91,  6.64],
			[ 6.13,  7.84,  3.92,  8.13,  2.44,  8.13],
			[ 0.52,  8.13,  0.00,  7.11,  0.00,  6.00],
			[ 0.00,  4.93,  0.67,  2.60,  2.18,  1.58],
			[ 3.95,  0.39,  6.16,  0.13,  7.68,  0.13],
			[ 9.60,  0.13, 10.09,  1.12, 10.09,  2.22]
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
			[ 0.86,  7.98, 'L'],
			[ 0.50,  7.98, 'L'],
			[ 0.50,  5.58, 'L'],
			[ 0.50, 29.07, 'L'],
			[ 0.86, 29.07, 'L']
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
			[ 9.20,   2.41],
			[ 9.56,   2.41, 'L'],
			[ 9.56, -21.08, 'L'],
			[ 9.20, -21.08, 'L'],
			[ 9.20,   0, 'L'],
			[ 9.56,   2.41, 'L']
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

function drawTabZero(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Tablature Zero default settings
		var settings = {
			'scale': 1.0
		};
		
		var paths = [
			[ 4.27, 12.61],
			[ 4.78, 13.25,  5.01, 14.01,  5.01, 15.03],
			[ 5.01, 16.80,  4.04, 18.13,  2.76, 18.13],
			[ 1.46, 18.13,  0.50, 16.80,  0.50, 14.99],
			[ 0.50, 13.18,  1.46, 11.85,  2.76, 11.85],
			[ 3.34, 11.85,  3.86, 12.11,  4.27, 12.61],
			[ 2.14, 12.83],
			[ 2.07, 13.13,  2.00, 14.10,  2.00, 14.99],
			[ 2.00, 16.02,  2.07, 16.96,  2.18, 17.24],
			[ 2.28, 17.52,  2.48, 17.68,  2.75, 17.68],
			[ 3.05, 17.68,  3.26, 17.49,  3.35, 17.15],
			[ 3.43, 16.85,  3.50, 15.89,  3.50, 15.01],
			[ 3.50, 13.96,  3.43, 13.02,  3.32, 12.74],
			[ 3.22, 12.46,  3.01, 12.30,  2.75, 12.30],
			[ 2.45, 12.30,  2.24, 12.48,  2.14, 12.83]
		];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        // Start drawing
        ctx.clearRect(position.x, position.y + 11.85 * settings.scale, 5.51 * settings.scale, 6.28 * settings.scale);
        drawPaths(paths, ctx, position, settings);
	}
}

function drawTabOne(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Tablature One default settings
		var settings = {
			'scale': 1.0
		};
		var paths = [
			[ 3.60, 16.76],
			[ 3.60, 17.30,  3.60, 17.34,  3.67, 17.41],
			[ 3.74, 17.50,  3.93, 17.54,  4.37, 17.54],
			[ 4.65, 17.54, 'L'],
			[ 4.65, 18.01, 'L'],
			[ 1.18, 18.01, 'L'],
			[ 1.18, 17.54, 'L'],
			[ 1.46, 17.54, 'L'],
			[ 1.92, 17.54,  2.10, 17.50,  2.18, 17.41],
			[ 2.24, 17.34,  2.24, 17.29,  2.24, 16.76],
			[ 2.24, 13.67, 'L'],
			[ 2.24, 12.95,  2.24, 12.95,  1.47, 12.94],
			[ 1.10, 12.94, 'L'],
			[ 1.10, 12.45, 'L'],
			[ 2.13, 12.43,  2.76, 12.26,  3.30, 11.85],
			[ 3.60, 11.85, 'L'],
			[ 3.60, 16.76, 'L']
		];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        // Start drawing
        ctx.clearRect(position.x, position.y + 11.85 * settings.scale, 5.51 * settings.scale, 6.28 * settings.scale);
        drawPaths(paths, ctx, position, settings);
	}
}

function drawTabTwo(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Tablature Two default settings
		var settings = {
			'scale': 1.0
		};
		var paths = [
			[ 4.95, 15.69],
			[ 4.75, 18.04, 'L'],
			[ 4.49, 18.02,  4.37, 18.01,  4.22, 18.01],
			[ 0.95, 18.01, 'L'],
			[ 0.83, 18.01,  0.73, 18.02,  0.50, 18.04],
			[ 0.50, 17.63, 'L'],
			[ 0.94, 17.01,  1.27, 16.61,  2.25, 15.58],
			[ 3.17, 14.60,  3.45, 14.09,  3.45, 13.36],
			[ 3.45, 12.72,  3.10, 12.35,  2.49, 12.35],
			[ 2.06, 12.35,  1.59, 12.64,  1.59, 12.92],
			[ 1.59, 12.99,  1.63, 13.04,  1.73, 13.08],
			[ 2.13, 13.28,  2.29, 13.49,  2.29, 13.87],
			[ 2.29, 14.32,  2.00, 14.61,  1.55, 14.61],
			[ 1.03, 14.61,  0.69, 14.22,  0.69, 13.61],
			[ 0.69, 12.62,  1.60, 11.85,  2.79, 11.85],
			[ 4.01, 11.85,  4.93, 12.55,  4.93, 13.49],
			[ 4.93, 13.89,  4.75, 14.35,  4.46, 14.75],
			[ 4.21, 15.07,  3.94, 15.27,  2.73, 16.05],
			[ 2.39, 16.28,  2.16, 16.44,  1.86, 16.70],
			[ 3.54, 16.70, 'L'],
			[ 4.08, 16.69,  4.10, 16.69,  4.19, 16.63],
			[ 4.26, 16.59,  4.31, 16.48,  4.39, 16.13],
			[ 4.48, 15.69, 'L'],
			[ 4.95, 15.69, 'L'],
		];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        // Start drawing
        ctx.clearRect(position.x, position.y + 11.85 * settings.scale, 5.51 * settings.scale, 6.28 * settings.scale);
        drawPaths(paths, ctx, position, settings);
	}
}

function drawTabThree(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Tablature Three default settings
		var settings = {
			'scale': 1.0
		};
		var paths = [
			[ 4.26, 15.07],
			[ 4.66, 15.30,  4.90, 15.78,  4.90, 16.33],
			[ 4.90, 16.89,  4.64, 17.42,  4.24, 17.69],
			[ 3.84, 17.97,  3.24, 18.13,  2.61, 18.13],
			[ 1.35, 18.13,  0.50, 17.53,  0.50, 16.65],
			[ 0.50, 16.16,  0.82, 15.82,  1.28, 15.82],
			[ 1.72, 15.82,  2.04, 16.14,  2.04, 16.55],
			[ 2.04, 16.79,  1.98, 16.90,  1.72, 17.15],
			[ 1.66, 17.21,  1.63, 17.26,  1.63, 17.31],
			[ 1.63, 17.49,  2.01, 17.68,  2.38, 17.68],
			[ 3.02, 17.68,  3.39, 17.17,  3.39, 16.30],
			[ 3.39, 15.49,  3.12, 15.07,  2.58, 15.07],
			[ 2.54, 15.07,  2.40, 15.09,  2.14, 15.11],
			[ 2.09, 15.12,  2.04, 15.12,  2.00, 15.12],
			[ 1.82, 15.12,  1.69, 14.98,  1.69, 14.79],
			[ 1.69, 14.61,  1.80, 14.50,  2.00, 14.50],
			[ 2.11, 14.50,  2.16, 14.51,  2.36, 14.55],
			[ 2.50, 14.58,  2.60, 14.60,  2.67, 14.60],
			[ 3.07, 14.60,  3.34, 14.13,  3.34, 13.38],
			[ 3.34, 12.70,  3.01, 12.30,  2.47, 12.30],
			[ 2.14, 12.30,  1.80, 12.47,  1.80, 12.63],
			[ 1.80, 12.67,  1.82, 12.69,  1.87, 12.74],
			[ 2.12, 12.97,  2.21, 13.15,  2.21, 13.39],
			[ 2.21, 13.80,  1.93, 14.08,  1.51, 14.08],
			[ 1.06, 14.08,  0.72, 13.74,  0.72, 13.29],
			[ 0.72, 12.95,  0.90, 12.59,  1.18, 12.34],
			[ 1.54, 12.02,  2.07, 11.85,  2.69, 11.85],
			[ 3.93, 11.85,  4.74, 12.47,  4.74, 13.39],
			[ 4.74, 14.06,  4.34, 14.53,  3.57, 14.75],
			[ 3.51, 14.76,  3.45, 14.78,  3.34, 14.81],
			[ 3.81, 14.87,  4.01, 14.93,  4.26, 15.07]
		];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        // Start drawing
        ctx.clearRect(position.x, position.y + 11.85 * settings.scale, 5.51 * settings.scale, 6.28 * settings.scale);
        drawPaths(paths, ctx, position, settings);
	}
}

function drawTabFour(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Tablature Four default settings
		var settings = {
			'scale': 1.0
		};
		var paths = [
			[ 5.08, 15.85],
			[ 5.08, 16.43, 'L'],
			[ 4.21, 16.43, 'L'],
			[ 4.21, 16.76, 'L'],
			[ 4.21, 17.30,  4.21, 17.34,  4.27, 17.42],
			[ 4.34, 17.49,  4.54, 17.54,  4.90, 17.54],
			[ 5.00, 17.54, 'L'],
			[ 5.00, 18.01, 'L'],
			[ 2.03, 18.01, 'L'],
			[ 2.03, 17.54, 'L'],
			[ 2.13, 17.54, 'L'],
			[ 2.52, 17.54,  2.72, 17.50,  2.79, 17.42],
			[ 2.85, 17.34,  2.85, 17.30,  2.85, 16.76],
			[ 2.85, 16.43, 'L'],
			[ 0.50, 16.43, 'L'],
			[ 0.50, 15.79, 'L'],
			[ 3.67, 11.85, 'L'],
			[ 4.27, 11.85, 'L'],
			[ 4.23, 12.49,  4.21, 12.98,  4.21, 13.17],
			[ 4.21, 15.85, 'L'],
			[ 5.08, 15.85, 'L'],
			[ 2.85, 13.68],
			[ 1.14, 15.85, 'L'],
			[ 2.85, 15.85, 'L'],
			[ 2.85, 13.68, 'L']
		];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        // Start drawing
        ctx.clearRect(position.x, position.y + 11.85 * settings.scale, 5.51 * settings.scale, 6.28 * settings.scale);
        drawPaths(paths, ctx, position, settings);
	}
}

function drawTabFive(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Tablature Five default settings
		var settings = {
			'scale': 1.0
		};
		var paths = [
			[ 1.47, 14.34],
			[ 2.04, 14.08,  2.31, 14.01,  2.72, 14.01],
			[ 3.97, 14.01,  4.88, 14.84,  4.88, 15.97],
			[ 4.88, 17.25,  3.91, 18.13,  2.48, 18.13],
			[ 1.28, 18.13,  0.50, 17.56,  0.50, 16.69],
			[ 0.50, 16.16,  0.83, 15.81,  1.33, 15.81],
			[ 1.78, 15.81,  2.07, 16.09,  2.07, 16.52],
			[ 2.07, 16.82,  1.94, 16.98,  1.60, 17.15],
			[ 1.53, 17.19,  1.50, 17.22,  1.50, 17.27],
			[ 1.50, 17.45,  1.87, 17.63,  2.27, 17.63],
			[ 2.96, 17.63,  3.34, 17.07,  3.34, 16.02],
			[ 3.34, 15.08,  3.00, 14.60,  2.35, 14.60],
			[ 2.00, 14.60,  1.65, 14.71,  1.39, 14.93],
			[ 1.40, 14.98,  1.40, 15.03,  1.40, 15.07],
			[ 1.40, 15.26,  1.24, 15.42,  1.05, 15.42],
			[ 0.87, 15.42,  0.73, 15.28,  0.73, 15.09],
			[ 0.73, 14.96,  0.76, 14.89,  0.95, 14.70],
			[ 1.07, 13.20,  1.12, 12.55,  1.15, 11.85],
			[ 1.69, 11.96,  2.13, 12.00,  2.85, 12.00],
			[ 3.53, 12.00,  4.14, 11.95,  4.42, 11.88],
			[ 4.48, 11.86,  4.53, 11.85,  4.56, 11.85],
			[ 4.61, 11.85,  4.63, 11.89,  4.63, 11.95],
			[ 4.63, 12.14,  4.50, 12.46,  4.34, 12.68],
			[ 4.01, 13.10,  3.41, 13.35,  2.69, 13.35],
			[ 2.35, 13.35,  2.00, 13.30,  1.60, 13.22],
			[ 1.47, 14.34, 'L']
		];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        // Start drawing
        ctx.clearRect(position.x, position.y + 11.85 * settings.scale, 5.51 * settings.scale, 6.28 * settings.scale);
        drawPaths(paths, ctx, position, settings);
	}
}

function drawTabSix(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Tablature Six default settings
		var settings = {
			'scale': 1.0
		};
		var paths = [
			[ 3.27, 14.29],
			[ 4.30, 14.29,  5.02, 15.02,  5.02, 16.07],
			[ 5.02, 17.26,  4.09, 18.13,  2.81, 18.13],
			[ 2.10, 18.13,  1.52, 17.86,  1.09, 17.34],
			[ 0.68, 16.83,  0.50, 16.22,  0.50, 15.35],
			[ 0.50, 14.31,  0.73, 13.51,  1.25, 12.84],
			[ 1.75, 12.17,  2.40, 11.85,  3.22, 11.85],
			[ 4.22, 11.85,  4.86, 12.32,  4.86, 13.07],
			[ 4.86, 13.55,  4.54, 13.85,  4.05, 13.85],
			[ 3.60, 13.85,  3.28, 13.57,  3.28, 13.18],
			[ 3.28, 13.01,  3.34, 12.82,  3.46, 12.67],
			[ 3.52, 12.59,  3.53, 12.55,  3.53, 12.50],
			[ 3.53, 12.38,  3.37, 12.30,  3.15, 12.30],
			[ 2.56, 12.30,  2.17, 12.97,  2.05, 14.21],
			[ 2.03, 14.37,  2.00, 14.76,  2.00, 14.87],
			[ 2.37, 14.45,  2.72, 14.29,  3.27, 14.29],
			[ 2.13, 15.54],
			[ 2.08, 15.74,  2.06, 16.02,  2.06, 16.32],
			[ 2.06, 17.22,  2.33, 17.72,  2.80, 17.72],
			[ 3.26, 17.72,  3.51, 17.17,  3.51, 16.16],
			[ 3.51, 15.38,  3.27, 14.96,  2.82, 14.95],
			[ 2.49, 14.93,  2.22, 15.16,  2.13, 15.54]
		];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        // Start drawing
        ctx.clearRect(position.x, position.y + 11.85 * settings.scale, 5.51 * settings.scale, 6.28 * settings.scale);
        drawPaths(paths, ctx, position, settings);
	}
}

function drawTabSeven(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Tablature Seven default settings
		var settings = {
			'scale': 1.0
		};
		var paths = [
			[ 4.86, 12.22],
			[ 3.56, 14.97,  3.40, 15.56,  3.40, 17.16],
			[ 3.40, 17.79,  3.08, 18.13,  2.54, 18.13],
			[ 2.05, 18.13,  1.73, 17.79,  1.73, 17.28],
			[ 1.73, 16.92,  1.87, 16.50,  2.20, 15.87],
			[ 2.24, 15.78,  2.60, 15.20,  3.30, 14.12],
			[ 3.89, 13.24, 'L'],
			[ 3.16, 13.26,  2.78, 13.27,  2.74, 13.27],
			[ 2.48, 13.27,  2.04, 13.25,  1.75, 13.24],
			[ 1.69, 13.23,  1.64, 13.23,  1.60, 13.23],
			[ 1.29, 13.23,  1.23, 13.35,  1.06, 14.11],
			[ 0.98, 14.50, 'L'],
			[ 0.50, 14.45, 'L'],
			[ 0.80, 11.85, 'L'],
			[ 1.66, 11.95,  2.07, 11.97,  2.87, 11.97],
			[ 3.77, 11.97,  4.31, 11.94,  4.86, 11.85],
			[ 4.86, 12.22, 'L']
		];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        // Start drawing
        ctx.clearRect(position.x, position.y + 11.85 * settings.scale, 5.51 * settings.scale, 6.28 * settings.scale);
        drawPaths(paths, ctx, position, settings);
	}
}

function drawTabEight(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Tablature Eight default settings
		var settings = {
			'scale': 1.0
		};
		var paths = [
			[ 5.01, 16.14],
			[ 5.01, 17.33,  4.07, 18.13,  2.67, 18.13],
			[ 1.34, 18.13,  0.50, 17.53,  0.50, 16.59],
			[ 0.50, 16.09,  0.73, 15.69,  1.17, 15.46],
			[ 1.32, 15.38,  1.43, 15.35,  1.70, 15.26],
			[ 1.01, 14.89,  0.69, 14.39,  0.69, 13.70],
			[ 0.69, 12.58,  1.56, 11.85,  2.91, 11.85],
			[ 4.03, 11.85,  4.80, 12.40,  4.80, 13.20],
			[ 4.80, 13.60,  4.61, 13.95,  4.27, 14.19],
			[ 4.14, 14.28,  4.01, 14.34,  3.77, 14.43],
			[ 4.61, 14.77,  5.01, 15.32,  5.01, 16.14],
			[ 1.63, 16.56],
			[ 1.63, 17.26,  2.06, 17.68,  2.76, 17.68],
			[ 3.44, 17.68,  3.94, 17.25,  3.94, 16.66],
			[ 3.94, 16.22,  3.73, 15.98,  3.18, 15.79],
			[ 2.96, 15.72,  2.54, 15.60,  2.17, 15.49],
			[ 1.76, 15.83,  1.63, 16.09,  1.63, 16.56],
			[ 3.34, 14.20],
			[ 3.57, 14.00,  3.71, 13.65,  3.71, 13.29],
			[ 3.71, 12.69,  3.34, 12.30,  2.76, 12.30],
			[ 2.22, 12.30,  1.82, 12.66,  1.82, 13.14],
			[ 1.82, 13.52,  2.09, 13.88,  2.48, 14.02],
			[ 2.65, 14.09,  2.93, 14.16,  3.28, 14.25],
			[ 3.30, 14.24,  3.30, 14.24,  3.31, 14.22],
			[ 3.33, 14.22, 'L'],
			[ 3.34, 14.20, 'L']
		];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        // Start drawing
        ctx.clearRect(position.x, position.y + 11.85 * settings.scale, 5.51 * settings.scale, 6.28 * settings.scale);
        drawPaths(paths, ctx, position, settings);
	}
}

function drawTabNine(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Tablature Nine default settings
		var settings = {
			'scale': 1.0
		};
		var paths = [
			[ 2.22, 15.72],
			[ 1.23, 15.72,  0.50, 14.96,  0.50, 13.94],
			[ 0.50, 12.73,  1.41, 11.85,  2.67, 11.85],
			[ 3.40, 11.85,  4.04, 12.17,  4.48, 12.76],
			[ 4.85, 13.26,  5.02, 13.86,  5.02, 14.65],
			[ 5.02, 15.60,  4.80, 16.43,  4.36, 17.08],
			[ 3.91, 17.76,  3.19, 18.13,  2.29, 18.13],
			[ 1.31, 18.13,  0.67, 17.70,  0.67, 17.02],
			[ 0.67, 16.51,  1.02, 16.15,  1.50, 16.15],
			[ 1.93, 16.15,  2.23, 16.43,  2.23, 16.85],
			[ 2.23, 17.04,  2.21, 17.09,  2.06, 17.35],
			[ 2.02, 17.40,  2.00, 17.45,  2.00, 17.50],
			[ 2.00, 17.61,  2.11, 17.68,  2.30, 17.68],
			[ 3.00, 17.68,  3.38, 17.07,  3.47, 15.82],
			[ 3.49, 15.62,  3.49, 15.53,  3.49, 15.15],
			[ 3.13, 15.56,  2.76, 15.72,  2.22, 15.72],
			[ 2.00, 13.74],
			[ 2.00, 14.17,  2.06, 14.49,  2.15, 14.69],
			[ 2.26, 14.91,  2.49, 15.07,  2.74, 15.07],
			[ 3.18, 15.07,  3.46, 14.58,  3.46, 13.82],
			[ 3.46, 13.42,  3.38, 12.95,  3.27, 12.69],
			[ 3.16, 12.44,  2.97, 12.30,  2.74, 12.30],
			[ 2.26, 12.30,  2.00, 12.79,  2.00, 13.74]
		];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        // Start drawing
        ctx.clearRect(position.x, position.y + 11.85 * settings.scale, 5.51 * settings.scale, 6.28 * settings.scale);
        drawPaths(paths, ctx, position, settings);
	}
}
