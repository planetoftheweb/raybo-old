---
layout: blog
category: blog
Title: Data Visualization Graphic Formats
summary: If your goal is to create visualizations for online consumption, it's good to understand your output options. In this article, I'll talk about the different types of formats available and their advantages and disadvantages for visualization projects.
heroimage: ""
tags:
- data visualization
- CiC project
- navigation
---

# Understanding General Graphic Formats

There are many types of graphic formats, but for creating visualizations, some are better than others. Let's take a look at traditional online formats and the advantages some have over others for visualizations.

## Bitmap vs Vector
There are two ways of expressing graphics on devices, as either bitmaps or vectors. A bitmap, which is also known as a raster graphic is a grid of pixels (or a map of the computer bits used to describe the image, hence the term bitmap). Each grid has three dimensions: width, height and depth. The width and height are pretty obvious, but the depth needs some explaining. 

The depth in a bitmap refers to the amount of information required to describe each pixel which determines the number of colors that each pixel can have. Practically, this means how many bits we use to describe the color in each pixel. A bit is the single unit of information that a computer can store and it is stored as either a 1 or a 0. Practically to represent black you can use 0, which means the pixel on the screen is on and a 1 would mean that the pixel is on and therefore white.

The more bits you put together, the more information you can store. If you only use 1bit to store information about pixels, you can only represent two colors (black and white or off and on). If you add more bits, you can represent more colors. If, for example you have two bits, you can represent 4 colors.

| Units      | Size    | Bits | Colors |
|------------|---------|------|--------|
| 1-Bit      | 1       | 1    | 2      |
| 1-Byte     | 8 bits  | 8    | 256    |
| 1 Kilobyte | 16-bits | 16   |        |
| 1 Kilobyte | 16-bits | 16   |        |
| 1 Kilobyte | 16-bits | 16   |        |
| 1 Kilobyte | 16-bits | 16   |        |
| 1 Kilobyte | 16-bits | 16   |        |
| 1 Kilobyte | 16-bits | 16   |        |

###### Test

A one bit image, for example, would use 1 bit of information per pixel. 

but since they all end up being displayed on some type of monitors, all graphics end up as bitmaps, w