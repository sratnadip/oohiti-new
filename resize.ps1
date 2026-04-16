Add-Type -AssemblyName System.Drawing
$image = [System.Drawing.Image]::FromFile("c:\Users\LENOVO\Desktop\oohiti-new\src\assets\images\logo.png")
$bmp = New-Object System.Drawing.Bitmap 48, 48
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($image, 0, 0, 48, 48)
$g.Dispose()
$bmp.Save("c:\Users\LENOVO\Desktop\oohiti-new\public\favicon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$image.Dispose()
