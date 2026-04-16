Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("c:\Users\LENOVO\Desktop\oohiti-new\src\assets\images\logo.png")
Write-Output "Width: $($img.Width), Height: $($img.Height)"
$img.Dispose()
