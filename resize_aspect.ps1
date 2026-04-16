Add-Type -AssemblyName System.Drawing

$sourcePath = "c:\Users\LENOVO\Desktop\oohiti-new\src\assets\images\logo.png"
$destPath = "c:\Users\LENOVO\Desktop\oohiti-new\public\favicon.png"

$image = [System.Drawing.Image]::FromFile($sourcePath)

$targetWidth = 48
$targetHeight = 48

# Calculate new dimensions keeping aspect ratio
$ratioX = $targetWidth / $image.Width
$ratioY = $targetHeight / $image.Height
$ratio = if ($ratioX -lt $ratioY) { $ratioX } else { $ratioY }

$newWidth = [math]::Floor($image.Width * $ratio)
$newHeight = [math]::Floor($image.Height * $ratio)

# Calculate positions to center the image
$posX = [math]::Floor(($targetWidth - $newWidth) / 2)
$posY = [math]::Floor(($targetHeight - $newHeight) / 2)

$bmp = New-Object System.Drawing.Bitmap $targetWidth, $targetHeight
$g = [System.Drawing.Graphics]::FromImage($bmp)

# Clear background to transparent
$g.Clear([System.Drawing.Color]::Transparent)

$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

$g.DrawImage($image, $posX, $posY, $newWidth, $newHeight)

$g.Dispose()

$bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)

$bmp.Dispose()
$image.Dispose()

Write-Output "Favicon created successfully."
