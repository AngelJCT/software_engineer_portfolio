import colorsys

def hsl_to_hex(h, s, l):
    r, g, b = colorsys.hls_to_rgb(h/360, l/100, s/100)
    return '#{:02x}{:02x}{:02x}'.format(int(r*255), int(g*255), int(b*255))

print(hsl_to_hex(240, 9, 7.5))