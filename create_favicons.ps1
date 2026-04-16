Add-Type -AssemblyName System.Drawing

$src = "c:\Users\LENOVO\Desktop\oohiti-new\src\assets\images\logo.png"
$img = [System.Drawing.Bitmap]::FromFile($src)

$minY = $img.Height; $maxY = 0
$minX = $img.Width;  $maxX = 0

# Find minY, maxY, minX, maxX bounds of all non-white pixels
for ($y = 0; $y -lt $img.Height; $y+=5) {
    for ($x = 0; $x -lt $img.Width; $x+=5) {
        $c = $img.GetPixel($x, $y)
        if ($c.A -gt 50 -and ($c.R -lt 250 -or $c.G -lt 250 -or $c.B -lt 250)) {
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
        }
    }
}

$logoHeight = $maxY - $minY

# Scan for a vertical gap of fully white/transparent pixels to isolate symbol
$gapStartX = -1
$inSymbol = $false

for ($x = $minX; $x -lt $maxX; $x+=2) {
    $hasColor = $false
    for ($y = $minY; $y -le $maxY; $y+=5) {
        $c = $img.GetPixel($x, $y)
         if ($c.A -gt 50 -and ($c.R -lt 250 -or $c.G -lt 250 -or $c.B -lt 250)) {
            $hasColor = $true
            break
        }
    }
    
    if (-not $inSymbol -and $hasColor) {
        $inSymbol = $true
    }
    elseif ($inSymbol -and -not $hasColor) {
        # we found a gap! check if the gap is somewhat wide, but anything is fine
        $gapStartX = $x
        break
    }
}

if ($gapStartX -gt 0 -and $gapStartX -lt ($minX + $logoHeight * 3)) {
    $symbolMaxX = $gapStartX
} else {
    # Fallback if no gap found: assume symbol is ~1.6 times as wide as it is tall
    $symbolMaxX = $minX + [math]::Round($logoHeight * 1.6)
}

$symWidth = $symbolMaxX - $minX
$symHeight = $maxY - $minY

Write-Output "Bounds computed: minX=$minX, symbolMaxX=$symbolMaxX, minY=$minY, maxY=$maxY"

function Save-PaddedFavicon {
    param($size, $filename)
    $dest = "c:\Users\LENOVO\Desktop\oohiti-new\public\$filename"
    
    $bmp = New-Object System.Drawing.Bitmap $size, $size
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.Clear([System.Drawing.Color]::Transparent)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    
    # Let's add ~15% padding
    $pad = [math]::Round($size * 0.15)
    $availSize = $size - 2 * $pad
    
    # Scale width and height to fit in availSize
    $ratio = [math]::Min($availSize / $symWidth, $availSize / $symHeight)
    $targetW = [math]::Round($symWidth * $ratio)
    $targetH = [math]::Round($symHeight * $ratio)
    
    $offsetX = $pad + [math]::Round(($availSize - $targetW) / 2)
    $offsetY = $pad + [math]::Round(($availSize - $targetH) / 2)
    
    $rect = New-Object System.Drawing.Rectangle $offsetX, $offsetY, $targetW, $targetH
    
    # draw only the symbol part
    $srcRect = New-Object System.Drawing.Rectangle $minX, $minY, $symWidth, $symHeight
    $g.DrawImage($img, $rect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    
    $bmp.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    $g.Dispose()
}

Save-PaddedFavicon 32 "favicon-32x32.png"
Save-PaddedFavicon 16 "favicon-16x16.png"

$img.Dispose()

Write-Output "Cropped and padded favicons generated."
