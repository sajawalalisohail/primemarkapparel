# Unused Assets to Delete

The following files are confirmed unused and can be safely deleted:

## /public/branding/
- `APPAREL F.svg` - Not referenced
- `APPAREL12.svg` - Not referenced  
- `PrimeMark.svg` - Not referenced
- `home1.jpg` - Not referenced (using home2.png)

## /public/logo/
- `1logo.png` - Not referenced
- `final.svg` - Not referenced
- `final2.svg` - Not referenced (using footerl.svg)
- `pma logo.svg` - Not referenced
- `final pma full white yellow black 1600.svg` - Not referenced

## /public/services/
- `embroidery.jpg` - Not referenced
- `screen.png` - Not referenced (using pattern.png, sampling.png)

## /public/
- `next.svg` - Default Next.js file
- `vercel.svg` - Default Vercel file
- `file.svg` - Not referenced
- `globe.svg` - Not referenced
- `window.svg` - Not referenced

## Note
`/branding/APPAREL.svg` is used in admin pages, so keep it.

To delete these files, run:
```bash
# Windows PowerShell
Remove-Item "public\branding\APPAREL F.svg"
Remove-Item "public\branding\APPAREL12.svg"
Remove-Item "public\branding\PrimeMark.svg"
Remove-Item "public\branding\home1.jpg"
Remove-Item "public\logo\1logo.png"
Remove-Item "public\logo\final.svg"
Remove-Item "public\logo\final2.svg"
Remove-Item "public\logo\pma logo.svg"
Remove-Item "public\logo\final pma full white yellow black 1600.svg"
Remove-Item "public\services\embroidery.jpg"
Remove-Item "public\services\screen.png"
Remove-Item "public\next.svg"
Remove-Item "public\vercel.svg"
Remove-Item "public\file.svg"
Remove-Item "public\globe.svg"
Remove-Item "public\window.svg"
```
