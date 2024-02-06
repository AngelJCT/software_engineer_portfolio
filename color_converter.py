import colorsys
import sys

# Function to convert HSL to HEX
def hsl_to_hex(h, s, l):
    r, g, b = colorsys.hls_to_rgb(h/360, l/100, s/100)
    return '#{:02x}{:02x}{:02x}'.format(int(r*255), int(g*255), int(b*255))

# print the colors that are passed through the command line. Example (python color_converter.py 240 9 6.5)
print(hsl_to_hex(int(sys.argv[1]), float(sys.argv[2]), float(sys.argv[3])))