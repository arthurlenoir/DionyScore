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