function drawWholeNote(ctx, position, options)
{
    if (ctx != null && isPosition(position))
    {
        // Whole note default settings
        var settings = {
            'scale': 1.0
        }
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
	if (ctx != null & isPosition(position))
	{
		// Half note base default settings
		var settings = {
			'scale': 1.0
		}
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
	if (ctx != null & isPosition(position))
	{
		// Note base default settings
		var settings = {
			'scale': 1.0
		}
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
	if (ctx != null & isPosition(position))
	{
		// Right stem default settings
		var settings = {
			'scale': 1.0,
			'lineJoin': 'round'
		}
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
	if (ctx != null & isPosition(position))
	{
		// Left stem default settings
		var settings = {
			'scale': 1.0,
			'lineJoin': 'round'
		}
		var paths = [
			[ 8.75, 31.77],
			[ 9.11, 31.77, 'L'],
			[ 9.11,  8.28, 'L'],
			[ 8.75,  8.28, 'L'],
			[ 8.75, 31.77, 'L']
		];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        ctx.lineJoin = settings.lineJoin;
        // Start drawing
        strokePaths(paths, ctx, position, settings);
	}
}
