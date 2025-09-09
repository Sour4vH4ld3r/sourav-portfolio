# cPanel Deployment Guide for Sourav Halder Portfolio

## 📁 Files Ready for Upload

Your portfolio has been successfully built and packaged for cPanel deployment:

**ZIP File:** `sourav-portfolio-cpanel.zip` (865KB)

## 🚀 Deployment Steps

### Step 1: Access Your cPanel
1. Log in to your cPanel hosting account
2. Navigate to **File Manager** in the Files section

### Step 2: Upload the ZIP File
1. Go to your domain's root directory (usually `public_html/`)
2. Click **Upload** in the File Manager
3. Select and upload `sourav-portfolio-cpanel.zip`
4. Wait for the upload to complete

### Step 3: Extract the ZIP File
1. Right-click on the uploaded ZIP file
2. Select **Extract**
3. Choose to extract to the current directory (`public_html/`)
4. Delete the ZIP file after extraction

### Step 4: Verify Deployment
1. Visit your domain in a web browser
2. Check that the homepage loads correctly
3. Test navigation to `/projects` page
4. Ensure all images and assets load properly

## 📋 What's Included

### Generated Files:
- `index.html` - Homepage
- `projects/index.html` - Projects page
- `404.html` - Error page
- `_next/` folder - Next.js assets (CSS, JS, fonts)
- `assets/` folder - Your images, documents, icons
- `.htaccess` - Server configuration for optimization

### Features Included:
- ✅ Fully responsive design
- ✅ Dynamic projects section with filtering
- ✅ Corner border animations
- ✅ Technology icons
- ✅ Back to top button
- ✅ Contact form
- ✅ CV download functionality
- ✅ SEO optimization
- ✅ Fast loading with compression

## 🔧 .htaccess Features

The included `.htaccess` file provides:
- **Compression** - Faster loading times
- **Browser Caching** - Better performance
- **Security Headers** - Enhanced security
- **Clean URLs** - SEO-friendly URLs
- **404 Error Handling** - Custom error page

## 🌐 Domain Configuration

### If using a subdomain:
- Upload to the subdomain's root folder
- Example: `subdomain_folder/`

### If using main domain:
- Upload to `public_html/`
- Your portfolio will be accessible at `yourdomain.com`

## 🔒 SSL Configuration (Optional)

If you have SSL enabled:
1. Uncomment the HTTPS redirect lines in `.htaccess`:
```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## 📱 Mobile Optimization

Your portfolio is fully optimized for mobile devices with:
- Responsive grid layouts
- Touch-friendly navigation
- Optimized images
- Fast loading times

## 🎯 Performance Features

- **Static Generation** - No server-side processing required
- **Optimized Assets** - Minified CSS/JS
- **Image Optimization** - Efficient loading
- **Font Optimization** - Fast text rendering

## 🐛 Troubleshooting

### If images don't load:
- Check that external domains are accessible
- Verify image URLs in projects data
- Ensure cPanel allows external image loading

### If pages show 404:
- Verify `.htaccess` file was uploaded
- Check file permissions (755 for folders, 644 for files)
- Ensure all HTML files were extracted properly

### If styles don't load:
- Clear browser cache
- Check that `_next/static/css/` folder exists
- Verify `.htaccess` allows CSS file access

## 📞 Support

If you encounter any issues:
1. Check browser developer console for errors
2. Verify all files were uploaded correctly
3. Contact your hosting provider for server-specific issues

## ✅ Deployment Checklist

- [ ] ZIP file uploaded to cPanel
- [ ] Files extracted to correct directory
- [ ] Homepage loads correctly
- [ ] Projects page accessible
- [ ] All images displaying
- [ ] CV download working
- [ ] Mobile version responsive
- [ ] Contact form functioning
- [ ] SSL configured (if applicable)

Your professional portfolio is now ready to go live! 🚀 