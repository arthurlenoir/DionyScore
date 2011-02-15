# -*- coding: utf-8 -*-
import re

def getExtrema(paths):
    minX = None
    maxX = None
    minY = None
    maxY = None
    for path in paths:
        i = 0
        for value in path:
            if len(path) == 3 and i == 2:
                break
            if i % 2 == 0:
                if minX is None or value < minX:
                    minX = value
                if maxX is None or value > maxX:
                    maxX = value
            else:
                if minY is None or value < minY:
                    minY = value
                if maxY is None or value > maxY:
                    maxY = value
            i += 1
    return minX, maxX, minY, maxY

def getPathFromFile(file):
    flag = False
    paths = []
    f = open(file, 'rb')
    commandMatcher = re.compile('(-?\\d+\\.?\\d* )+[cCmLl]')
    endLinesRemoved = re.compile('\r?\n')
    i = 0
    endTag = '*U'
    for line in f:
        i += 1
        line = endLinesRemoved.sub('', line)
        #if line.startswith('*u'):
        #    flag = True
        #    endTag = '*U'
        if line.startswith('%AI5_BeginLayer'):
            flag = True
            endTag = '%AI5_EndLayer--'
        if line == endTag:
            flag = False
            if len(paths) > 0:
                break
        if flag:
            if commandMatcher.match(line):
                command = line.split(' ')
                if len(command) == 3:
                    if command[2] in ['L', 'l']:
                        paths.append([float(command[0]), float(command[1]), 'l'])
                    else:
                        paths.append([float(command[0]), float(command[1])])
                elif len(command) == 7:
                    paths.append([float(command[0]), float(command[1]), float(command[2]), float(command[3]), float(command[4]), float(command[5])])
    return paths

paths = getPathFromFile('D:/Projet Dionysos/Traces/hundredTwentyEighthRest.ai')

minX, maxX, minY, maxY = getExtrema(paths)
verticalPadding = 9.4 
horizontalPadding = 0
scale = 1.48 * 1.02 * 0.92 * 1.03 * 1.02 

newvalue = None
for path in paths:
    line = "["
    i = 0
    for value in path:
        if len(path) == 3 and i == 2:
            line += ", 'L'"
            break
        if line != "[":
            line += ", "
        if i % 2 == 0:
            newvalue = horizontalPadding + (value - minX) * scale
        else:
            newvalue = verticalPadding + (maxY - value)* scale
        if newvalue < 10:
            line += " "
        line += "%.2f" % newvalue
        i += 1
    line += "], "
    print line