/**********************************/
/*  Accidental drawing functions  */
/*								  */
/*   space between 2 lines 14.9   */
/**********************************/

function drawCommonTime(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Common time default settings
		var settings = {
			'scale': 1.0
		}
		var paths = [
			[ 3.98, 29.77],
			[ 3.98, 31.25, 'L'],
			[ 3.98, 34.54,  4.19, 36.66,  7.27, 36.69],
			[ 9.60, 36.69, 11.31, 34.65, 11.86, 32.30],
			[11.92, 32.10, 12.07, 32.01, 12.21, 32.01],
			[12.38, 32.01, 12.59, 32.15, 12.59, 32.36],
			[12.59, 32.94, 11.16, 37.42,  7.27, 37.42],
			[ 3.81, 37.42,  0.00, 35.56,  0.00, 29.77],
			[ 0.00, 25.41,  2.35, 22.15,  7.27, 22.15],
			[10.67, 22.15, 12.39, 25.26, 12.39, 26.89],
			[12.39, 28.02, 11.49, 28.98, 10.44, 28.98],
			[ 9.68, 28.98,  8.26, 28.40,  8.26, 26.80],
			[ 8.26, 25.70,  9.04, 24.56, 10.35, 24.56],
			[10.50, 24.56, 10.61, 24.59, 10.76, 24.59],
			[ 9.94, 23.55,  8.66, 22.88,  7.27, 22.88],
			[ 4.19, 22.88,  3.98, 25.00,  3.98, 28.29],
			[ 3.98, 29.77, 'L']
		];
		
		// Overing default settings with options
		jQuery.extend(settings, options);
		// Start drawing
		drawPaths(paths, ctx, position, settings);
	}
}

function drawCutCommonTime(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Cut common time default settings
		var settings = {
			'scale': 1.0
		}
		var paths = [
			[ 8.26, 26.80],
			[ 8.26, 25.70,  9.04, 24.56, 10.35, 24.56],
			[10.50, 24.56, 10.61, 24.59, 10.76, 24.59],
			[ 9.94, 23.55,  8.66, 22.88,  7.27, 22.88],
			[ 6.89, 22.88, 'L'],
			[ 6.89, 36.66, 'L'],
			[ 7.04, 36.66,  7.15, 36.69,  7.27, 36.69],
			[ 9.60, 36.69, 11.31, 34.65, 11.86, 32.30],
			[11.92, 32.10, 12.07, 32.01, 12.21, 32.01],
			[12.39, 32.01, 12.59, 32.15, 12.59, 32.36],
			[12.59, 32.94, 11.17, 37.42,  7.27, 37.42],
			[ 7.15, 37.42,  7.04, 37.39,  6.89, 37.39],
			[ 6.89, 39.66, 'L'],
			[ 6.89, 39.83,  6.77, 39.95,  6.60, 39.95],
			[ 6.11, 39.95, 'L'],
			[ 5.93, 39.95,  5.81, 39.83,  5.81, 39.66],
			[ 5.81, 37.30, 'L'],
			[ 1.63, 36.63,  0.00, 33.40,  0.00, 29.77],
			[ 0.00, 26.13,  1.60, 22.91,  5.81, 22.24],
			[ 5.81, 19.88, 'L'],
			[ 5.81, 19.71,  5.93, 19.59,  6.11, 19.59],
			[ 6.60, 19.59, 'L'],
			[ 6.77, 19.59,  6.89, 19.71,  6.89, 19.88],
			[ 6.89, 22.15, 'L'],
			[ 7.27, 22.15, 'L'],
			[10.67, 22.15, 12.39, 25.26, 12.39, 26.89],
			[12.39, 28.02, 11.49, 28.98, 10.44, 28.98],
			[ 9.68, 28.98,  8.26, 28.40,  8.26, 26.80],
			[ 5.81, 23.08],
			[ 4.13, 23.72,  3.98, 25.64,  3.98, 28.29],
			[ 3.98, 29.77, 'L'],
			[ 3.98, 31.25, 'L'],
			[ 3.98, 33.90,  4.13, 35.82,  5.81, 36.46],
			[ 5.81, 23.08, 'L']
		];
		
		// Overing default settings with options
		jQuery.extend(settings, options);
		// Start drawing
		drawPaths(paths, ctx, position, settings);
	}
}

function drawZero(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Zero default settings
		var settings = {
			'scale': 1.0
		}
		var paths = [
			[ 5.23, 15.08],
			[ 6.28, 14.94,  7.25, 15.21,  8.14, 15.89],
			[ 9.03, 16.57,  9.70, 17.43, 10.15, 18.48],
			[10.71, 19.74, 10.98, 21.10, 10.95, 22.56],
			[10.92, 24.03, 10.59, 25.37,  9.97, 26.59],
			[ 9.08, 28.37,  7.82, 29.37,  6.19, 29.59],
			[ 4.99, 29.74,  3.91, 29.45,  2.97, 28.71],
			[ 2.02, 27.98,  1.32, 27.01,  0.87, 25.81],
			[ 0.00, 23.54,  0.00, 21.22,  0.87, 18.86],
			[ 1.24, 17.83,  1.80, 16.98,  2.56, 16.30],
			[ 3.31, 15.62,  4.21, 15.21,  5.23, 15.08],
			[ 5.41, 15.92],
			[ 4.59, 16.02,  4.05, 16.81,  3.78, 18.31],
			[ 3.70, 18.71,  3.65, 19.12,  3.63, 19.53],
			[ 3.61, 19.93,  3.61, 20.47,  3.63, 21.12],
			[ 3.65, 21.78,  3.66, 22.19,  3.66, 22.35],
			[ 3.66, 22.58,  3.66, 22.91,  3.65, 23.34],
			[ 3.64, 23.76,  3.63, 24.11,  3.63, 24.37],
			[ 3.63, 24.63,  3.64, 24.94,  3.66, 25.31],
			[ 3.68, 25.68,  3.72, 26.02,  3.78, 26.33],
			[ 3.90, 27.07,  4.10, 27.67,  4.39, 28.15],
			[ 4.68, 28.62,  5.14, 28.83,  5.76, 28.77],
			[ 6.59, 28.69,  7.14, 27.90,  7.41, 26.39],
			[ 7.49, 25.98,  7.54, 25.57,  7.56, 25.17],
			[ 7.58, 24.76,  7.58, 24.23,  7.56, 23.57],
			[ 7.54, 22.91,  7.53, 22.50,  7.53, 22.35],
			[ 7.53, 22.11,  7.53, 21.78,  7.54, 21.36],
			[ 7.55, 20.93,  7.56, 20.58,  7.56, 20.31],
			[ 7.56, 20.04,  7.55, 19.72,  7.53, 19.35],
			[ 7.51, 18.98,  7.47, 18.64,  7.41, 18.33],
			[ 7.12, 16.59,  6.45, 15.79,  5.41, 15.92]
		];
		
		// Overing default settings with options
		jQuery.extend(settings, options);
		// Start drawing
		drawPaths(paths, ctx, position, settings);
	}
}

function drawOne(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// One default settings
		var settings = {
			'scale': 1.0
		}
		var paths = [
			[ 3.57, 14.98],
			[ 3.66, 14.94,  3.78, 14.95,  3.93, 15.00],
			[ 4.07, 15.04,  4.23, 15.11,  4.41, 15.20],
			[ 4.58, 15.29,  4.71, 15.34,  4.79, 15.36],
			[ 5.12, 15.44,  5.62, 15.34,  6.30, 15.07],
			[ 6.49, 14.97,  6.65, 15.01,  6.76, 15.18],
			[ 6.82, 15.28,  6.85, 15.58,  6.85, 16.09],
			[ 6.85, 18.18, 'L'],
			[ 6.85, 26.09, 'L'],
			[ 6.85, 27.37,  7.29, 28.24,  8.16, 28.70],
			[ 8.37, 28.80,  8.59, 28.86,  8.80, 28.88],
			[ 8.97, 28.88, 'L'],
			[ 9.07, 28.90,  9.14, 28.93,  9.18, 28.97],
			[ 9.27, 29.02,  9.32, 29.12,  9.31, 29.26],
			[ 9.30, 29.39,  9.24, 29.49,  9.15, 29.55],
			[ 9.07, 29.59,  8.71, 29.58,  8.07, 29.52],
			[ 7.86, 29.50,  7.46, 29.44,  6.88, 29.36],
			[ 6.30, 29.27,  5.84, 29.22,  5.51, 29.20],
			[ 5.09, 29.18,  4.48, 29.22,  3.70, 29.33],
			[ 2.91, 29.44,  2.44, 29.50,  2.29, 29.52],
			[ 1.59, 29.60,  1.19, 29.59,  1.09, 29.49],
			[ 0.90, 29.26,  0.93, 29.07,  1.18, 28.94],
			[ 1.26, 28.90,  1.38, 28.87,  1.56, 28.85],
			[ 1.73, 28.83,  1.86, 28.81,  1.94, 28.79],
			[ 2.52, 28.60,  2.96, 28.13,  3.25, 27.40],
			[ 3.40, 26.95,  3.48, 26.09,  3.48, 24.81],
			[ 3.48, 20.86, 'L'],
			[ 3.48, 19.40, 'L'],
			[ 3.48, 19.03,  3.43, 18.79,  3.33, 18.67],
			[ 3.04, 18.34,  2.76, 18.50,  2.49, 19.14],
			[ 2.39, 19.35,  1.93, 20.35,  1.09, 22.13],
			[ 0.67, 22.93,  0.33, 23.12,  0.08, 22.71],
			[ 0.00, 22.58,  0.03, 22.38,  0.16, 22.10],
			[ 0.69, 20.94, 'L'],
			[ 2.81, 16.46, 'L'],
			[ 3.00, 16.10,  3.17, 15.74,  3.30, 15.39],
			[ 3.44, 15.14,  3.53, 15.00,  3.57, 14.98]
		];
		
		// Overing default settings with options
		jQuery.extend(settings, options);
		// Start drawing
		drawPaths(paths, ctx, position, settings);
	}
}

function drawTwo(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// One default settings
		var settings = {
			'scale': 1.0
		}
		var paths = [
			[ 3.05, 25.71],
			[ 4.14, 25.55,  5.16, 25.74,  6.11, 26.26],
			[ 6.24, 26.34,  6.48, 26.48,  6.82, 26.68],
			[ 7.16, 26.89,  7.40, 27.02,  7.54, 27.09],
			[ 7.69, 27.16,  7.95, 27.24,  8.32, 27.34],
			[ 8.68, 27.43,  8.96, 27.43,  9.16, 27.31],
			[ 9.47, 27.25,  9.71, 27.09,  9.89, 26.81],
			[ 9.90, 26.80,  9.94, 26.72,  9.99, 26.58],
			[10.04, 26.45, 10.09, 26.36, 10.15, 26.32],
			[10.28, 26.24, 10.41, 26.24, 10.52, 26.32],
			[10.64, 26.40, 10.69, 26.51, 10.67, 26.67],
			[10.59, 27.04, 10.41, 27.44, 10.12, 27.89],
			[ 9.59, 28.67,  8.85, 29.20,  7.89, 29.49],
			[ 6.93, 29.78,  6.02, 29.74,  5.15, 29.37],
			[ 4.72, 29.16,  4.40, 28.96,  4.19, 28.76],
			[ 4.13, 28.72,  4.04, 28.64,  3.92, 28.51],
			[ 3.81, 28.39,  3.72, 28.30,  3.65, 28.24],
			[ 3.58, 28.18,  3.49, 28.11,  3.39, 28.04],
			[ 3.28, 27.96,  3.17, 27.90,  3.07, 27.86],
			[ 2.96, 27.82,  2.84, 27.79,  2.70, 27.77],
			[ 2.34, 27.72,  1.98, 27.78,  1.63, 27.96],
			[ 1.28, 28.15,  1.02, 28.40,  0.84, 28.73],
			[ 0.80, 28.81,  0.77, 28.94,  0.74, 29.13],
			[ 0.71, 29.31,  0.67, 29.44,  0.61, 29.52],
			[ 0.55, 29.61,  0.46, 29.66,  0.32, 29.65],
			[ 0.18, 29.64,  0.09, 29.59,  0.03, 29.49],
			[ 0.01, 29.37,  0.00, 29.29,  0.00, 29.23],
			[ 0.00, 29.17,  0.01, 29.07,  0.04, 28.92],
			[ 0.07, 28.78,  0.09, 28.68,  0.09, 28.65],
			[ 0.24, 27.85,  0.62, 27.09,  1.22, 26.38],
			[ 1.63, 25.89,  2.31, 25.31,  3.26, 24.63],
			[ 4.21, 23.95,  5.00, 23.28,  5.63, 22.60],
			[ 6.26, 21.92,  6.65, 21.13,  6.80, 20.22],
			[ 7.04, 18.70,  6.83, 17.49,  6.19, 16.58],
			[ 5.88, 16.13,  5.46, 15.87,  4.93, 15.80],
			[ 4.39, 15.72,  3.93, 15.88,  3.55, 16.29],
			[ 3.31, 16.68,  3.26, 16.98,  3.39, 17.19],
			[ 3.51, 17.40,  3.71, 17.69,  3.97, 18.06],
			[ 4.23, 18.43,  4.35, 18.74,  4.33, 18.99],
			[ 4.29, 19.65,  4.00, 20.16,  3.45, 20.51],
			[ 2.89, 20.85,  2.31, 20.94,  1.70, 20.75],
			[ 1.09, 20.57,  0.68, 20.16,  0.47, 19.52],
			[ 0.15, 18.61,  0.31, 17.75,  0.93, 16.96],
			[ 1.55, 16.16,  2.34, 15.62,  3.31, 15.33],
			[ 4.55, 14.94,  5.88, 15.02,  7.28, 15.55],
			[ 8.69, 16.08,  9.60, 16.94, 10.03, 18.12],
			[10.30, 18.88, 10.30, 19.80, 10.03, 20.88],
			[ 9.80, 21.72,  9.27, 22.43,  8.46, 23.03],
			[ 8.19, 23.23,  7.88, 23.42,  7.54, 23.62],
			[ 7.21, 23.81,  6.92, 23.95,  6.69, 24.05],
			[ 6.45, 24.15,  6.11, 24.29,  5.67, 24.47],
			[ 5.22, 24.66,  4.91, 24.79,  4.74, 24.87],
			[ 3.92, 25.20,  3.36, 25.48,  3.05, 25.71]
		];
		
		// Overing default settings with options
		jQuery.extend(settings, options);
		// Start drawing
		drawPaths(paths, ctx, position, settings);
	}
}

function drawThree(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Three default settings
		var settings = {
			'scale': 1.0
		}
		var paths = [
			[ 4.04, 14.96],
			[ 4.29, 14.94,  4.65, 14.95,  5.11, 14.99],
			[ 7.11, 15.11,  8.41, 15.74,  9.01, 16.88],
			[ 9.41, 17.64,  9.48, 18.58,  9.21, 19.70],
			[ 9.11, 20.20,  8.90, 20.60,  8.57, 20.89],
			[ 8.53, 20.93,  8.42, 21.01,  8.22, 21.11],
			[ 8.03, 21.22,  7.89, 21.32,  7.82, 21.43],
			[ 7.74, 21.54,  7.70, 21.68,  7.70, 21.85],
			[ 7.72, 22.01,  7.78, 22.14,  7.87, 22.25],
			[ 7.97, 22.35,  8.11, 22.45,  8.30, 22.55],
			[ 8.48, 22.65,  8.60, 22.72,  8.66, 22.75],
			[ 9.07, 23.04,  9.37, 23.47,  9.56, 24.03],
			[ 9.70, 24.42,  9.76, 24.86,  9.76, 25.34],
			[ 9.76, 25.86,  9.70, 26.33,  9.56, 26.74],
			[ 9.25, 27.63,  8.66, 28.30,  7.80, 28.74],
			[ 6.94, 29.19,  5.98, 29.44,  4.94, 29.50],
			[ 3.15, 29.57,  1.80, 29.12,  0.87, 28.13],
			[ 0.50, 27.75,  0.25, 27.28,  0.13, 26.75],
			[ 0.00, 26.22,  0.07, 25.71,  0.34, 25.22],
			[ 0.75, 24.57,  1.36, 24.27,  2.18, 24.32],
			[ 2.99, 24.38,  3.52, 24.79,  3.77, 25.55],
			[ 3.93, 26.07,  3.90, 26.46,  3.69, 26.71],
			[ 3.63, 26.76,  3.51, 26.86,  3.32, 26.98],
			[ 3.14, 27.11,  2.99, 27.24,  2.89, 27.36],
			[ 2.78, 27.49,  2.73, 27.63,  2.73, 27.78],
			[ 2.73, 28.17,  2.98, 28.46,  3.48, 28.66],
			[ 4.43, 29.00,  5.15, 28.90,  5.63, 28.34],
			[ 6.04, 27.85,  6.28, 27.16,  6.36, 26.27],
			[ 6.44, 25.38,  6.43, 24.63,  6.33, 24.03],
			[ 6.29, 23.12,  6.03, 22.56,  5.55, 22.35],
			[ 5.37, 22.27,  5.04, 22.23,  4.56, 22.23],
			[ 3.08, 22.23, 'L'],
			[ 2.55, 22.23,  2.26, 22.11,  2.20, 21.88],
			[ 2.19, 21.76,  2.19, 21.67,  2.23, 21.59],
			[ 2.27, 21.51,  2.34, 21.46,  2.45, 21.43],
			[ 2.56, 21.40,  2.64, 21.39,  2.70, 21.39],
			[ 2.76, 21.39,  2.85, 21.39,  2.99, 21.39],
			[ 4.59, 21.39, 'L'],
			[ 5.09, 21.39,  5.45, 21.33,  5.66, 21.21],
			[ 5.99, 21.00,  6.20, 20.62,  6.27, 20.08],
			[ 6.49, 18.97,  6.48, 17.98,  6.25, 17.08],
			[ 6.07, 16.44,  5.70, 16.00,  5.13, 15.76],
			[ 4.55, 15.52,  3.97, 15.53,  3.37, 15.81],
			[ 3.21, 15.88,  3.10, 15.95,  3.02, 16.01],
			[ 2.92, 16.11,  2.85, 16.18,  2.81, 16.24],
			[ 2.72, 16.53,  2.71, 16.73,  2.79, 16.84],
			[ 2.86, 16.94,  3.02, 17.09,  3.27, 17.27],
			[ 3.51, 17.46,  3.66, 17.61,  3.72, 17.72],
			[ 3.89, 18.07,  3.84, 18.44,  3.56, 18.83],
			[ 3.28, 19.22,  2.94, 19.47,  2.55, 19.58],
			[ 2.11, 19.72,  1.68, 19.67,  1.27, 19.42],
			[ 0.87, 19.18,  0.61, 18.84,  0.49, 18.39],
			[ 0.35, 17.97,  0.41, 17.47,  0.66, 16.91],
			[ 1.13, 15.84,  2.25, 15.19,  4.04, 14.96]
		];
		
		// Overing default settings with options
		jQuery.extend(settings, options);
		// Start drawing
		drawPaths(paths, ctx, position, settings);
	}
}

function drawFour(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Four default settings
		var settings = {
			'scale': 1.0
		}
		var paths = [
			[ 5.80, 25.88],
			[ 1.67, 25.88, 'L'],
			[ 1.63, 25.88,  1.53, 25.89,  1.38, 25.90],
			[ 1.22, 25.91,  1.10, 25.91,  1.01, 25.90],
			[ 0.93, 25.89,  0.82, 25.88,  0.69, 25.87],
			[ 0.57, 25.86,  0.46, 25.83,  0.37, 25.77],
			[ 0.29, 25.71,  0.21, 25.64,  0.16, 25.56],
			[ 0.00, 25.33,  0.07, 25.05,  0.36, 24.72],
			[ 0.82, 24.12,  1.14, 23.69,  1.32, 23.44],
			[ 2.60, 21.64,  3.44, 19.79,  3.85, 17.89],
			[ 4.00, 17.21,  4.08, 16.55,  4.08, 15.91],
			[ 4.08, 15.45,  4.15, 15.17,  4.28, 15.07],
			[ 4.38, 14.99,  4.55, 14.99,  4.81, 15.07],
			[ 5.19, 15.18,  5.53, 15.26,  5.82, 15.30],
			[ 5.90, 15.38,  6.15, 15.39,  6.58, 15.34],
			[ 7.01, 15.30,  7.25, 15.27,  7.31, 15.27],
			[ 7.37, 15.27,  7.60, 15.23,  8.01, 15.14],
			[ 8.41, 15.05,  8.65, 15.00,  8.73, 14.98],
			[ 8.87, 14.94,  8.99, 14.96,  9.11, 15.02],
			[ 9.23, 15.09,  9.27, 15.19,  9.25, 15.33],
			[ 9.24, 15.43,  9.12, 15.58,  8.91, 15.80],
			[ 8.01, 16.84, 'L'],
			[ 4.55, 20.88, 'L'],
			[ 2.36, 23.41, 'L'],
			[ 1.57, 24.32,  1.10, 24.87,  0.97, 25.04],
			[ 5.80, 25.04, 'L'],
			[ 5.80, 22.02, 'L'],
			[ 5.80, 21.98,  5.79, 21.85,  5.77, 21.62],
			[ 5.75, 21.40,  5.75, 21.22,  5.77, 21.09],
			[ 5.79, 20.95,  5.82, 20.84,  5.88, 20.74],
			[ 5.92, 20.66,  5.98, 20.60,  6.06, 20.55],
			[ 6.13, 20.50,  6.23, 20.45,  6.33, 20.39],
			[ 6.44, 20.33,  6.51, 20.28,  6.55, 20.24],
			[ 7.05, 19.89,  7.43, 19.56,  7.69, 19.26],
			[ 7.82, 19.08,  7.98, 18.80,  8.15, 18.43],
			[ 8.33, 18.05,  8.47, 17.78,  8.59, 17.63],
			[ 8.72, 17.47,  8.88, 17.46,  9.05, 17.60],
			[ 9.15, 17.66,  9.20, 17.83,  9.20, 18.12],
			[ 9.20, 19.46, 'L'],
			[ 9.20, 25.04, 'L'],
			[11.17, 25.04, 'L'],
			[11.54, 25.04, 11.73, 25.18, 11.73, 25.45],
			[11.73, 25.74, 11.58, 25.88, 11.29, 25.88],
			[11.29, 25.90, 10.94, 25.91, 10.24, 25.91],
			[ 9.20, 25.88, 'L'],
			[ 9.20, 27.26,  9.62, 28.18, 10.48, 28.65],
			[10.59, 28.70, 10.76, 28.75, 10.97, 28.78],
			[11.18, 28.80, 11.33, 28.83, 11.41, 28.85],
			[11.50, 28.87, 11.57, 28.94, 11.61, 29.07],
			[11.65, 29.19, 11.64, 29.29, 11.58, 29.37],
			[11.50, 29.47, 11.35, 29.52, 11.12, 29.52],
			[10.84, 29.52, 10.46, 29.48,  9.95, 29.40],
			[ 8.46, 29.21,  7.54, 29.12,  7.19, 29.14],
			[ 7.15, 29.14,  6.44, 29.23,  5.07, 29.40],
			[ 4.53, 29.48,  4.11, 29.52,  3.82, 29.52],
			[ 3.55, 29.52,  3.39, 29.44,  3.35, 29.29],
			[ 3.28, 29.11,  3.32, 28.98,  3.50, 28.88],
			[ 3.56, 28.86,  3.65, 28.84,  3.77, 28.83],
			[ 3.90, 28.82,  3.98, 28.82,  4.02, 28.82],
			[ 4.29, 28.76,  4.55, 28.63,  4.81, 28.41],
			[ 5.47, 27.89,  5.80, 27.05,  5.80, 25.88]
		];
		
		// Overing default settings with options
		jQuery.extend(settings, options);
		// Start drawing
		drawPaths(paths, ctx, position, settings);
	}
}

function drawFive(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Five default settings
		var settings = {
			'scale': 1.0
		}
		var paths = [
			[ 1.87, 21.40],
			[ 2.92, 20.39,  4.37, 20.00,  6.23, 20.23],
			[ 7.49, 20.37,  8.50, 20.83,  9.25, 21.60],
			[10.05, 22.47, 10.41, 23.63, 10.33, 25.06],
			[10.25, 26.67,  9.45, 27.88,  7.93, 28.68],
			[ 6.41, 29.48,  4.86, 29.69,  3.29, 29.30],
			[ 2.33, 29.07,  1.51, 28.63,  0.85, 27.97],
			[ 0.19, 27.31,  0.00, 26.53,  0.27, 25.64],
			[ 0.50, 24.85,  1.05, 24.41,  1.91, 24.32],
			[ 2.78, 24.23,  3.40, 24.56,  3.79, 25.29],
			[ 4.10, 25.89,  4.10, 26.36,  3.79, 26.69],
			[ 3.73, 26.77,  3.59, 26.88,  3.38, 27.02],
			[ 3.17, 27.17,  3.02, 27.31,  2.93, 27.44],
			[ 2.84, 27.58,  2.82, 27.73,  2.86, 27.91],
			[ 2.96, 28.36,  3.35, 28.64,  4.05, 28.75],
			[ 5.31, 28.95,  6.13, 28.55,  6.52, 27.56],
			[ 6.95, 26.47,  7.05, 25.13,  6.84, 23.52],
			[ 6.74, 22.74,  6.53, 22.12,  6.20, 21.66],
			[ 5.72, 21.15,  5.12, 20.93,  4.41, 20.97],
			[ 3.71, 21.02,  3.07, 21.24,  2.51, 21.63],
			[ 2.39, 21.71,  2.25, 21.84,  2.09, 22.02],
			[ 1.92, 22.21,  1.81, 22.32,  1.75, 22.36],
			[ 1.64, 22.45,  1.50, 22.48,  1.35, 22.44],
			[ 1.19, 22.41,  1.09, 22.32,  1.06, 22.18],
			[ 1.02, 22.03,  0.99, 21.85,  0.98, 21.66],
			[ 0.97, 21.46,  0.98, 21.24,  1.00, 20.99],
			[ 1.02, 20.74,  1.03, 20.56,  1.03, 20.47],
			[ 1.03, 16.72, 'L'],
			[ 1.03, 16.66,  1.02, 16.52,  1.00, 16.31],
			[ 0.98, 16.10,  0.97, 15.92,  0.97, 15.77],
			[ 0.97, 15.63,  0.99, 15.48,  1.04, 15.32],
			[ 1.09, 15.17,  1.16, 15.06,  1.26, 15.00],
			[ 1.32, 14.96,  1.41, 14.94,  1.54, 14.94],
			[ 1.66, 14.94,  1.78, 14.95,  1.88, 14.97],
			[ 1.99, 14.99,  2.12, 15.02,  2.28, 15.06],
			[ 2.43, 15.10,  2.53, 15.12,  2.57, 15.12],
			[ 3.54, 15.25,  4.58, 15.32,  5.71, 15.32],
			[ 6.54, 15.32,  7.59, 15.23,  8.85, 15.06],
			[ 9.47, 14.94,  9.84, 14.95,  9.95, 15.09],
			[10.07, 15.22, 10.01, 15.41,  9.78, 15.64],
			[ 9.41, 15.99,  8.99, 16.30,  8.53, 16.57],
			[ 7.25, 17.35,  5.88, 17.82,  4.43, 18.00],
			[ 4.29, 18.01,  4.02, 18.03,  3.61, 18.05],
			[ 3.21, 18.07,  2.90, 18.10,  2.68, 18.14],
			[ 2.61, 18.16,  2.53, 18.16,  2.45, 18.15],
			[ 2.37, 18.15,  2.30, 18.15,  2.23, 18.15],
			[ 2.17, 18.16,  2.10, 18.20,  2.04, 18.26],
			[ 1.93, 18.37,  1.87, 18.67,  1.87, 19.16],
			[ 1.87, 21.40, 'L']
		];
		
		// Overing default settings with options
		jQuery.extend(settings, options);
		// Start drawing
		drawPaths(paths, ctx, position, settings);
	}
}

function drawSix(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Six default settings
		var settings = {
			'scale': 1.0
		}
		var paths = [
			[ 3.54, 21.83],
			[ 4.39, 21.46,  5.37, 21.36,  6.48, 21.52],
			[ 7.58, 21.69,  8.46, 22.12,  9.10, 22.82],
			[ 9.99, 23.77, 10.28, 24.93,  9.98, 26.31],
			[ 9.68, 27.68,  8.93, 28.61,  7.73, 29.10],
			[ 7.13, 29.35,  6.48, 29.49,  5.78, 29.53],
			[ 4.97, 29.57,  4.32, 29.51,  3.83, 29.36],
			[ 2.30, 28.87,  1.22, 27.55,  0.58, 25.37],
			[ 0.09, 23.96,  0.00, 22.35,  0.30, 20.55],
			[ 0.60, 18.75,  1.32, 17.33,  2.47, 16.30],
			[ 3.24, 15.61,  4.14, 15.19,  5.16, 15.07],
			[ 6.17, 14.94,  7.15, 15.11,  8.08, 15.58],
			[ 8.81, 15.95,  9.32, 16.52,  9.59, 17.31],
			[ 9.86, 18.09,  9.70, 18.80,  9.10, 19.44],
			[ 8.49, 19.99,  7.79, 20.08,  6.99, 19.73],
			[ 6.18, 19.39,  5.82, 18.79,  5.90, 17.96],
			[ 5.92, 17.75,  6.08, 17.54,  6.38, 17.34],
			[ 6.68, 17.13,  6.86, 16.99,  6.91, 16.91],
			[ 7.11, 16.62,  7.06, 16.33,  6.77, 16.04],
			[ 6.32, 15.67,  5.81, 15.57,  5.24, 15.72],
			[ 4.67, 15.88,  4.25, 16.20,  3.98, 16.68],
			[ 3.73, 17.15,  3.58, 17.86,  3.54, 18.83],
			[ 3.52, 19.12,  3.51, 19.44,  3.51, 19.78],
			[ 3.51, 20.12,  3.52, 20.49,  3.53, 20.90],
			[ 3.54, 21.30,  3.54, 21.62,  3.54, 21.83],
			[ 4.91, 22.12],
			[ 4.29, 22.22,  3.89, 22.56,  3.72, 23.17],
			[ 3.62, 23.53,  3.57, 24.00,  3.57, 24.56],
			[ 3.57, 25.40, 'L'],
			[ 3.57, 25.46,  3.57, 25.66,  3.56, 26.01],
			[ 3.55, 26.36,  3.55, 26.61,  3.56, 26.76],
			[ 3.57, 26.90,  3.59, 27.12,  3.63, 27.42],
			[ 3.67, 27.73,  3.73, 27.95,  3.82, 28.11],
			[ 3.91, 28.26,  4.03, 28.42,  4.20, 28.57],
			[ 4.36, 28.73,  4.56, 28.83,  4.79, 28.86],
			[ 4.91, 28.88,  5.09, 28.89,  5.34, 28.89],
			[ 6.02, 28.83,  6.46, 28.48,  6.65, 27.82],
			[ 6.75, 27.55,  6.82, 27.12,  6.86, 26.54],
			[ 6.86, 26.44,  6.86, 26.30,  6.87, 26.12],
			[ 6.88, 25.93,  6.89, 25.79,  6.89, 25.69],
			[ 6.89, 25.64,  6.89, 25.50,  6.89, 25.27],
			[ 6.89, 25.05,  6.89, 24.89,  6.89, 24.79],
			[ 6.89, 24.70,  6.88, 24.54,  6.87, 24.31],
			[ 6.86, 24.09,  6.84, 23.92,  6.81, 23.80],
			[ 6.78, 23.69,  6.75, 23.54,  6.71, 23.35],
			[ 6.67, 23.17,  6.62, 23.02,  6.55, 22.92],
			[ 6.48, 22.81,  6.40, 22.70,  6.30, 22.57],
			[ 6.21, 22.44,  6.09, 22.35,  5.96, 22.28],
			[ 5.82, 22.21,  5.66, 22.17,  5.49, 22.15],
			[ 5.26, 22.11,  5.06, 22.10,  4.91, 22.12]
		];
		
		// Overing default settings with options
		jQuery.extend(settings, options);
		// Start drawing
		drawPaths(paths, ctx, position, settings);
	}
}

function drawSeven(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Seven default settings
		var settings = {
			'scale': 1.0
		}
		var paths = [
			[ 7.09, 18.83],
			[ 5.97, 19.47,  4.95, 19.49,  4.04, 18.89],
			[ 3.92, 18.81,  3.74, 18.65,  3.47, 18.41],
			[ 3.21, 18.16,  2.97, 17.98,  2.73, 17.84],
			[ 2.50, 17.70,  2.26, 17.64,  2.01, 17.64],
			[ 1.62, 17.64,  1.31, 17.90,  1.08, 18.42],
			[ 1.00, 18.62,  0.94, 18.84,  0.90, 19.09],
			[ 0.86, 19.34,  0.84, 19.55,  0.84, 19.72],
			[ 0.84, 19.88,  0.85, 20.12,  0.86, 20.44],
			[ 0.87, 20.76,  0.87, 20.98,  0.87, 21.10],
			[ 0.87, 21.13,  0.88, 21.22,  0.89, 21.34],
			[ 0.90, 21.47,  0.90, 21.57,  0.89, 21.65],
			[ 0.88, 21.73,  0.87, 21.82,  0.86, 21.92],
			[ 0.85, 22.03,  0.81, 22.11,  0.76, 22.17],
			[ 0.70, 22.23,  0.62, 22.27,  0.52, 22.29],
			[ 0.39, 22.31,  0.28, 22.29,  0.20, 22.23],
			[ 0.13, 22.17,  0.07, 22.07,  0.04, 21.92],
			[ 0.02, 21.78,  0.00, 21.65,  0.00, 21.55],
			[ 0.00, 21.44,  0.00, 21.30,  0.02, 21.13],
			[ 0.02, 20.95,  0.03, 20.84,  0.03, 20.81],
			[ 0.03, 16.74, 'L'],
			[ 0.03, 15.69, 'L'],
			[ 0.03, 15.44,  0.06, 15.27,  0.12, 15.19],
			[ 0.19, 15.08,  0.31, 15.02,  0.47, 15.02],
			[ 0.62, 15.02,  0.74, 15.09,  0.81, 15.22],
			[ 0.85, 15.28,  0.87, 15.40,  0.86, 15.59],
			[ 0.85, 15.77,  0.86, 15.93,  0.90, 16.07],
			[ 0.94, 16.20,  1.04, 16.28,  1.19, 16.30],
			[ 1.27, 16.30,  1.34, 16.24,  1.40, 16.12],
			[ 1.57, 15.93,  1.75, 15.75,  1.95, 15.57],
			[ 2.49, 15.16,  3.09, 14.98,  3.75, 15.02],
			[ 4.35, 15.04,  4.97, 15.28,  5.61, 15.75],
			[ 5.67, 15.79,  5.78, 15.87,  5.93, 16.01],
			[ 6.09, 16.14,  6.20, 16.24,  6.28, 16.30],
			[ 6.36, 16.36,  6.46, 16.43,  6.60, 16.50],
			[ 6.74, 16.58,  6.87, 16.63,  7.01, 16.65],
			[ 7.14, 16.67,  7.29, 16.67,  7.44, 16.65],
			[ 7.77, 16.61,  8.09, 16.50,  8.39, 16.33],
			[ 8.69, 16.15,  8.91, 16.00,  9.04, 15.88],
			[ 9.18, 15.75,  9.41, 15.51,  9.74, 15.16],
			[ 9.97, 14.95, 10.19, 14.94, 10.38, 15.14],
			[10.53, 15.31, 10.49, 15.59, 10.23, 15.98],
			[ 8.90, 17.99, 'L'],
			[ 7.19, 20.70,  6.18, 23.28,  5.87, 25.72],
			[ 5.78, 26.71,  5.80, 27.62,  5.93, 28.45],
			[ 5.93, 28.49,  5.96, 28.60,  6.00, 28.79],
			[ 6.05, 28.97,  6.07, 29.13,  6.06, 29.25],
			[ 6.05, 29.38,  6.01, 29.48,  5.93, 29.56],
			[ 5.74, 29.62,  5.59, 29.64,  5.50, 29.63],
			[ 5.40, 29.62,  5.21, 29.57,  4.94, 29.47],
			[ 4.67, 29.37,  4.52, 29.32,  4.48, 29.32],
			[ 3.68, 29.13,  2.68, 29.22,  1.48, 29.59],
			[ 1.06, 29.68,  0.82, 29.60,  0.79, 29.32],
			[ 0.77, 29.26,  0.81, 29.10,  0.93, 28.83],
			[ 1.16, 28.36,  1.33, 28.02,  1.42, 27.78],
			[ 1.97, 26.60,  2.81, 25.13,  3.95, 23.36],
			[ 4.24, 22.90,  4.75, 22.17,  5.48, 21.17],
			[ 6.21, 20.17,  6.75, 19.39,  7.09, 18.83]
		];
		
		// Overing default settings with options
		jQuery.extend(settings, options);
		// Start drawing
		drawPaths(paths, ctx, position, settings);
	}
}

function drawEight(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Eight default settings
		var settings = {
			'scale': 1.0
		}
		var paths = [
			[ 2.34, 22.07],
			[ 2.03, 21.91,  1.73, 21.65,  1.44, 21.28],
			[ 0.86, 20.58,  0.58, 19.79,  0.60, 18.90],
			[ 0.62, 18.01,  0.94, 17.23,  1.56, 16.57],
			[ 2.32, 15.78,  3.35, 15.29,  4.66, 15.12],
			[ 5.96, 14.94,  7.11, 15.07,  8.10, 15.49],
			[ 9.01, 15.84,  9.67, 16.40, 10.06, 17.17],
			[10.46, 17.93, 10.48, 18.75, 10.11, 19.62],
			[ 9.84, 20.26,  9.31, 20.97,  8.54, 21.75],
			[ 9.29, 22.07,  9.92, 22.67, 10.43, 23.52],
			[10.85, 24.24, 11.02, 25.00, 10.94, 25.80],
			[10.85, 26.61, 10.52, 27.32,  9.96, 27.94],
			[ 9.54, 28.38,  8.98, 28.77,  8.31, 29.10],
			[ 7.41, 29.51,  6.43, 29.69,  5.37, 29.65],
			[ 4.30, 29.62,  3.32, 29.37,  2.43, 28.93],
			[ 1.54, 28.48,  0.88, 27.82,  0.44, 26.95],
			[ 0.00, 26.08,  0.00, 25.21,  0.43, 24.33],
			[ 0.52, 24.12,  0.66, 23.90,  0.83, 23.67],
			[ 1.01, 23.43,  1.15, 23.26,  1.25, 23.14],
			[ 1.36, 23.03,  1.56, 22.83,  1.84, 22.56],
			[ 2.12, 22.29,  2.29, 22.12,  2.34, 22.07],
			[ 3.22, 22.65],
			[ 3.14, 22.67,  3.06, 22.72,  2.97, 22.79],
			[ 2.88, 22.87,  2.78, 22.97,  2.66, 23.10],
			[ 2.55, 23.22,  2.48, 23.30,  2.46, 23.32],
			[ 1.47, 24.36,  1.18, 25.45,  1.59, 26.57],
			[ 1.88, 27.41,  2.48, 28.05,  3.39, 28.49],
			[ 4.30, 28.94,  5.20, 29.07,  6.10, 28.90],
			[ 6.89, 28.72,  7.45, 28.24,  7.78, 27.46],
			[ 8.11, 26.67,  8.03, 25.94,  7.55, 25.26],
			[ 7.39, 25.05,  7.04, 24.79,  6.47, 24.48],
			[ 6.30, 24.38,  6.04, 24.23,  5.70, 24.03],
			[ 5.36, 23.82,  5.11, 23.67,  4.93, 23.58],
			[ 3.68, 22.85, 'L'],
			[ 3.39, 22.72,  3.24, 22.65,  3.22, 22.65],
			[ 5.46, 15.76],
			[ 4.72, 15.85,  4.16, 16.22,  3.77, 16.86],
			[ 3.38, 17.50,  3.39, 18.15,  3.80, 18.81],
			[ 3.95, 19.04,  4.29, 19.30,  4.82, 19.59],
			[ 6.15, 20.38, 'L'],
			[ 7.23, 20.99, 'L'],
			[ 7.50, 21.13,  7.65, 21.19,  7.67, 21.19],
			[ 7.74, 21.19,  7.82, 21.15,  7.90, 21.06],
			[ 7.98, 20.97,  8.06, 20.86,  8.15, 20.73],
			[ 8.23, 20.59,  8.29, 20.52,  8.31, 20.50],
			[ 9.08, 19.47,  9.31, 18.50,  9.00, 17.59],
			[ 8.79, 16.95,  8.32, 16.46,  7.61, 16.13],
			[ 6.89, 15.81,  6.17, 15.68,  5.46, 15.76]
		];
		
		// Overing default settings with options
		jQuery.extend(settings, options);
		// Start drawing
		drawPaths(paths, ctx, position, settings);
	}
}

function drawNine(ctx, position, options)
{
	if (ctx != null && isPosition(position))
	{
		// Nine default settings
		var settings = {
			'scale': 1.0
		}
		var paths = [
			[ 6.74, 22.69],
			[ 5.89, 23.05,  4.91, 23.16,  3.80, 22.99],
			[ 2.70, 22.83,  1.83, 22.39,  1.19, 21.70],
			[ 0.29, 20.75,  0.00, 19.58,  0.30, 18.21],
			[ 0.60, 16.83,  1.35, 15.90,  2.55, 15.42],
			[ 3.15, 15.17,  3.80, 15.02,  4.50, 14.98],
			[ 5.31, 14.94,  5.96, 15.00,  6.45, 15.16],
			[ 7.98, 15.64,  9.07, 16.97,  9.70, 19.14],
			[10.19, 20.55, 10.28, 22.16,  9.98, 23.97],
			[ 9.68, 25.77,  8.96, 27.18,  7.82, 28.21],
			[ 7.04, 28.91,  6.14, 29.32,  5.13, 29.45],
			[ 4.11, 29.57,  3.13, 29.40,  2.20, 28.94],
			[ 1.47, 28.57,  0.96, 27.99,  0.69, 27.21],
			[ 0.42, 26.42,  0.59, 25.71,  1.19, 25.07],
			[ 1.79, 24.53,  2.49, 24.43,  3.29, 24.78],
			[ 4.10, 25.13,  4.46, 25.72,  4.38, 26.55],
			[ 4.37, 26.77,  4.21, 26.97,  3.90, 27.18],
			[ 3.60, 27.38,  3.43, 27.52,  3.37, 27.60],
			[ 3.17, 27.89,  3.22, 28.18,  3.51, 28.47],
			[ 3.96, 28.84,  4.47, 28.95,  5.04, 28.79],
			[ 5.61, 28.64,  6.03, 28.32,  6.30, 27.83],
			[ 6.56, 27.37,  6.70, 26.65,  6.74, 25.68],
			[ 6.74, 22.69, 'L'],
			[ 4.91, 15.62],
			[ 4.23, 15.72,  3.80, 16.08,  3.63, 16.70],
			[ 3.53, 16.97,  3.46, 17.39,  3.43, 17.98],
			[ 3.43, 18.07,  3.42, 18.21,  3.41, 18.40],
			[ 3.40, 18.58,  3.40, 18.72,  3.40, 18.82],
			[ 3.40, 18.88,  3.40, 19.02,  3.40, 19.24],
			[ 3.40, 19.46,  3.40, 19.62,  3.40, 19.72],
			[ 3.40, 19.82,  3.40, 19.98,  3.41, 20.20],
			[ 3.42, 20.42,  3.44, 20.59,  3.47, 20.71],
			[ 3.50, 20.82,  3.53, 20.98,  3.57, 21.16],
			[ 3.61, 21.34,  3.66, 21.49,  3.73, 21.60],
			[ 3.80, 21.70,  3.88, 21.82,  3.98, 21.94],
			[ 4.07, 22.07,  4.19, 22.17,  4.33, 22.24],
			[ 4.46, 22.30,  4.62, 22.35,  4.79, 22.37],
			[ 5.02, 22.40,  5.22, 22.41,  5.37, 22.39],
			[ 5.99, 22.30,  6.39, 21.96,  6.57, 21.38],
			[ 6.66, 21.01,  6.71, 20.54,  6.71, 19.98],
			[ 6.71, 19.14, 'L'],
			[ 6.71, 19.06,  6.71, 18.89,  6.73, 18.62],
			[ 6.73, 18.34,  6.73, 18.13,  6.73, 17.98],
			[ 6.71, 17.82,  6.71, 17.62,  6.70, 17.36],
			[ 6.69, 17.11,  6.65, 16.91,  6.59, 16.75],
			[ 6.54, 16.60,  6.46, 16.43,  6.38, 16.26],
			[ 6.29, 16.09,  6.17, 15.95,  6.01, 15.85],
			[ 5.86, 15.76,  5.67, 15.69,  5.46, 15.65],
			[ 5.34, 15.63,  5.16, 15.62,  4.91, 15.62]
		];
		
		// Overing default settings with options
		jQuery.extend(settings, options);
		// Start drawing
		drawPaths(paths, ctx, position, settings);
	}
}