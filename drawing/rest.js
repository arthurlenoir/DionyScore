function drawWholeRest(ctx, position, options)
{
    if (ctx != null && isPosition(position))
    {
        // Whole rest default settings
        var settings = {
            'scale': 1.0
        };
        var paths = [
            [ 0.29, 19.54],
			[ 0.12, 19.54,  0.00, 19.42,  0.00, 19.25],
			[ 0.00, 15.29, 'L'],
			[ 0.00, 15.12,  0.12, 15.00,  0.29, 15.00],
			[10.61, 15.00, 'L'],
			[10.79, 15.00, 10.90, 15.12, 10.90, 15.29],
			[10.90, 19.25, 'L'],
			[10.90, 19.42, 10.79, 19.54, 10.61, 19.54],
			[ 0.29, 19.54, 'L']
        ];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        // Start drawing
        drawPaths(paths, ctx, position, settings);
    }
}

function drawHalfRest(ctx, position, options)
{
    if (ctx != null && isPosition(position))
    {
    	// Half rest default settings
        var settings = {
            'scale': 1.0
        };
        jQuery.extend(settings, options);
    	position.y += 2.9 * settings.scale;
    	drawWholeRest(ctx, position, options);
    }
}

function drawQuarterRest(ctx, position, options)
{
    if (ctx != null && isPosition(position))
    {
        // Quarter rest default settings
        var settings = {
            'scale': 1.0
        };
        var paths = [
            [ 4.10, 22.45],
			[ 4.10, 21.73,  3.87, 21.03,  3.37, 20.45],
			[ 2.36, 19.23, 'L'],
			[ 2.30, 19.14,  2.24, 19.05,  2.24, 18.94],
			[ 2.24, 18.70,  2.47, 18.50,  2.73, 18.50],
			[ 2.85, 18.50,  2.97, 18.53,  3.05, 18.65],
			[ 7.44, 23.88, 'L'],
			[ 7.65, 24.14,  7.74, 24.37,  7.74, 24.61],
			[ 7.74, 26.35,  4.13, 27.05,  4.13, 29.90],
			[ 4.13, 30.63,  4.36, 31.32,  4.83, 31.91],
			[ 7.27, 34.78, 'L'],
			[ 7.36, 34.87,  7.39, 34.99,  7.39, 35.07],
			[ 7.39, 35.34,  7.15, 35.54,  6.92, 35.54],
			[ 6.69, 35.54,  5.64, 34.26,  3.75, 34.26],
			[ 2.94, 34.26,  2.21, 34.58,  2.21, 36.21],
			[ 2.21, 37.23,  2.53, 38.36,  3.02, 38.94],
			[ 3.17, 39.12,  3.02, 39.32,  2.85, 39.32],
			[ 2.47, 39.32,  0.00, 35.51,  0.00, 33.39],
			[ 0.00, 32.34,  0.55, 32.17,  1.16, 32.17],
			[ 2.12, 32.17,  3.43, 32.54,  4.62, 33.07],
			[ 0.79, 28.47, 'L'],
			[ 0.58, 28.24,  0.49, 27.98,  0.49, 27.75],
			[ 0.49, 26.03,  4.10, 25.30,  4.10, 22.45]
        ];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        // Start drawing
        drawPaths(paths, ctx, position, settings);
    }
}

function drawEighthRest(ctx, position, options)
{
    if (ctx != null && isPosition(position))
    {
        // Eighth rest default settings
        var settings = {
            'scale': 1.0
        };
        var paths = [
            [ 4.77, 26.85],
			[ 5.20, 26.85,  6.34, 25.45,  6.54, 25.02],
			[ 6.72, 24.64,  7.21, 24.67,  7.36, 25.02],
			[ 3.78, 37.23, 'L'],
			[ 3.55, 37.43,  3.26, 37.52,  3.00, 37.52],
			[ 2.70, 37.52,  2.41, 37.43,  2.18, 37.23],
			[ 5.58, 27.75, 'L'],
			[ 4.59, 28.10,  3.58, 28.39,  2.53, 28.39],
			[ 1.19, 28.39,  0.00, 27.43,  0.00, 26.09],
			[ 0.00, 24.93,  0.96, 24.00,  2.12, 24.00],
			[ 4.51, 24.00,  3.43, 26.85,  4.77, 26.85]
        ];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        // Start drawing
        drawPaths(paths, ctx, position, settings);
    }
}

function drawSixteenthRest(ctx, position, options)
{
    if (ctx != null && isPosition(position))
    {
        // Sixteenth rest default settings
        var settings = {
            'scale': 1.0
        };
        var paths = [
            [ 7.01, 26.85],
			[ 7.47, 26.85,  8.46, 25.42,  8.67, 25.02],
			[ 8.84, 24.64,  9.33, 24.67,  9.48, 25.02],
			[ 4.27, 44.50, 'L'],
			[ 4.04, 44.70,  3.78, 44.79,  3.49, 44.79],
			[ 3.20, 44.79,  2.91, 44.70,  2.67, 44.50],
			[ 5.61, 34.99, 'L'],
			[ 4.62, 35.37,  3.58, 35.66,  2.53, 35.66],
			[ 1.19, 35.66,  0.00, 34.70,  0.00, 33.36],
			[ 0.00, 32.20,  0.96, 31.27,  2.09, 31.27],
			[ 4.51, 31.27,  3.40, 34.12,  4.74, 34.12],
			[ 5.23, 34.12,  6.34, 32.64,  6.48, 32.14],
			[ 7.82, 27.75, 'L'],
			[ 6.86, 28.10,  5.84, 28.39,  4.80, 28.39],
			[ 3.46, 28.39,  2.27, 27.43,  2.27, 26.09],
			[ 2.27, 24.93,  3.23, 24.00,  4.39, 24.00],
			[ 6.78, 24.00,  5.70, 26.85,  7.01, 26.85]
        ];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        // Start drawing
        drawPaths(paths, ctx, position, settings);
    }
}

function drawThirtySecondRest(ctx, position, options)
{
    if (ctx != null && isPosition(position))
    {
        // Thirty-second rest default settings
        var settings = {
            'scale': 1.0
        };
        var paths = [
            [ 8.72, 19.55],
			[ 9.16, 19.55, 10.06, 18.12, 10.24, 17.72],
			[10.41, 17.34, 10.90, 17.37, 11.05, 17.72],
			[ 4.77, 44.47, 'L'],
			[ 4.54, 44.67,  4.24, 44.76,  3.95, 44.76],
			[ 3.69, 44.76,  3.40, 44.67,  3.17, 44.47],
			[ 5.67, 34.96, 'L'],
			[ 4.65, 35.31,  3.61, 35.63,  2.53, 35.63],
			[ 1.16, 35.63,  0.00, 34.67,  0.00, 33.33],
			[ 0.00, 32.17,  0.93, 31.24,  2.09, 31.24],
			[ 4.48, 31.24,  3.40, 34.09,  4.74, 34.09],
			[ 5.20, 34.09,  6.31, 32.55,  6.45, 32.02],
			[ 7.59, 27.69, 'L'],
			[ 6.60, 28.04,  5.58, 28.36,  4.51, 28.36],
			[ 3.17, 28.36,  1.98, 27.40,  1.98, 26.06],
			[ 1.98, 24.90,  2.94, 23.97,  4.10, 23.97],
			[ 6.48, 23.97,  5.41, 26.82,  6.72, 26.82],
			[ 7.18, 26.82,  8.23, 25.34,  8.34, 24.84],
			[ 9.51, 20.45, 'L'],
			[ 8.55, 20.80,  7.53, 21.09,  6.51, 21.09],
			[ 5.18, 21.09,  3.98, 20.13,  3.98, 18.79],
			[ 3.98, 17.63,  4.91, 16.70,  6.08, 16.70],
			[ 8.49, 16.70,  7.39, 19.55,  8.72, 19.55]
        ];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        // Start drawing
        drawPaths(paths, ctx, position, settings);
    }
}

function drawSixtyFourthRest(ctx, position, options)
{
    if (ctx != null && isPosition(position))
    {
        // Sixty Fourth rest default settings
        var settings = {
            'scale': 1.0
        };
        var paths = [
            [ 9.94, 19.55],
			[10.35, 19.55, 11.14, 18.10, 11.31, 17.72],
			[11.46, 17.34, 11.98, 17.37, 12.12, 17.72],
			[ 5.29, 51.74, 'L'],
			[ 5.06, 51.94,  4.77, 52.03,  4.48, 52.03],
			[ 4.19, 52.03,  3.93, 51.94,  3.69, 51.74],
			[ 5.82, 42.20, 'L'],
			[ 4.77, 42.58,  3.66, 42.90,  2.53, 42.90],
			[ 1.19, 42.90,  0.00, 41.94,  0.00, 40.60],
			[ 0.00, 39.44,  0.96, 38.51,  2.12, 38.51],
			[ 4.51, 38.51,  3.43, 41.36,  4.74, 41.36],
			[ 5.26, 41.36,  6.37, 39.76,  6.48, 39.23],
			[ 7.44, 34.96, 'L'],
			[ 6.43, 35.31,  5.35, 35.63,  4.27, 35.63],
			[ 2.91, 35.63,  1.74, 34.67,  1.74, 33.33],
			[ 1.74, 32.17,  2.67, 31.24,  3.84, 31.24],
			[ 6.22, 31.24,  5.15, 34.09,  6.48, 34.09],
			[ 6.95, 34.09,  7.97, 32.55,  8.08, 32.02],
			[ 9.07, 27.69, 'L'],
			[ 8.08, 28.07,  7.04, 28.36,  5.99, 28.36],
			[ 4.65, 28.36,  3.46, 27.40,  3.46, 26.06],
			[ 3.46, 24.90,  4.42, 23.97,  5.58, 23.97],
			[ 7.97, 23.97,  6.89, 26.82,  8.20, 26.82],
			[ 8.66, 26.82,  9.60, 25.31,  9.71, 24.84],
			[10.70, 20.45, 'L'],
			[ 9.74, 20.80,  8.75, 21.09,  7.74, 21.09],
			[ 6.37, 21.09,  5.21, 20.13,  5.21, 18.79],
			[ 5.21, 17.63,  6.14, 16.70,  7.30, 16.70],
			[ 9.68, 16.70,  8.61, 19.55,  9.94, 19.55]
        ];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        // Start drawing
        drawPaths(paths, ctx, position, settings);
    }
}

function drawHundredTwentyEighthRest(ctx, position, options)
{
    if (ctx != null && isPosition(position))
    {
        // Hundred twenty-eighth rest default settings
        var settings = {
            'scale': 1.0
        };
        var paths = [
            [10.61, 12.25],
			[11.02, 12.25, 11.66, 10.80, 11.84, 10.42],
			[11.98, 10.04, 12.50, 10.07, 12.65, 10.42],
			[ 5.76, 51.71, 'L'],
			[ 5.53, 51.91,  5.23, 52.00,  4.94, 52.00],
			[ 4.68, 52.00,  4.39, 51.91,  4.16, 51.71],
			[ 5.93, 42.14, 'L'],
			[ 4.83, 42.52,  3.69, 42.87,  2.53, 42.87],
			[ 1.16, 42.87,  0.00, 41.91,  0.00, 40.57],
			[ 0.00, 39.41,  0.93, 38.48,  2.09, 38.48],
			[ 4.48, 38.48,  3.40, 41.33,  4.74, 41.33],
			[ 5.23, 41.33,  6.40, 39.67,  6.48, 39.12],
			[ 7.27, 34.90, 'L'],
			[ 6.22, 35.28,  5.12, 35.60,  3.98, 35.60],
			[ 2.65, 35.60,  1.45, 34.64,  1.45, 33.30],
			[ 1.45, 32.14,  2.39, 31.21,  3.55, 31.21],
			[ 5.96, 31.21,  4.86, 34.06,  6.19, 34.06],
			[ 6.69, 34.06,  7.74, 32.46,  7.82, 31.94],
			[ 8.61, 27.66, 'L'],
			[ 7.59, 28.01,  6.54, 28.33,  5.47, 28.33],
			[ 4.10, 28.33,  2.94, 27.37,  2.94, 26.03],
			[ 2.94, 24.87,  3.87, 23.94,  5.03, 23.94],
			[ 7.42, 23.94,  6.34, 26.79,  7.68, 26.79],
			[ 8.14, 26.79,  9.07, 25.25,  9.16, 24.72],
			[ 9.98, 20.42, 'L'],
			[ 8.99, 20.77,  7.97, 21.06,  6.92, 21.06],
			[ 5.58, 21.06,  4.39, 20.10,  4.39, 18.76],
			[ 4.39, 17.60,  5.32, 16.67,  6.48, 16.67],
			[ 8.90, 16.67,  7.79, 19.52,  9.13, 19.52],
			[ 9.57, 19.52, 10.41, 18.01, 10.50, 17.54],
			[11.31, 13.15, 'L'],
			[10.35, 13.50,  9.39, 13.79,  8.40, 13.79],
			[ 7.04, 13.79,  5.87, 12.83,  5.87, 11.49],
			[ 5.87, 10.33,  6.80,  9.40,  7.97,  9.40],
			[10.35,  9.40,  9.28, 12.25, 10.61, 12.25]
        ];
        
        // Overing default settings with options
        jQuery.extend(settings, options);
        // Start drawing
        drawPaths(paths, ctx, position, settings);
    }
}