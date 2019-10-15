# Primitive One Frontity Theme
A Headless WordPress (REST API) Theme for Frontity

![screenshot](img/punky.png)

Created with a little Node.js and React magic. 

Built on the awesome new, itty bitty, Frontity framework: https://frontity.org/ 

With little help from our friends: Bootstrap 4, GSAP and ScrollMagic. 

Live demo site: https://primitivedigital.co.uk  

Domain and PHP server provided by: https://primitivehosting.uk/headlesswp


N.B. This is only my second attempt at React based website so do be kind.  
It may be messy and it may be downright wrong in places.											


## Issues, Fix and Refine ###
1. Fix: React-bootstrap Tabs aria issue: https://github.com/react-bootstrap/react-bootstrap/pull/4331
2. Having issues importing the bootstrap CSS correctly
3. Better webfont usage (yes, I know these are bad but they're oh so pretty)
4. Improve Google analytics implementation
5. Content positioning / Roots and Fills
6. How to set the location of page content when a static is set as the homepage

7. Best practice: creating custom post/cpt blocks with filters (WP_Query)
8. Best practice: chooing the right component (Image can be imported from various modules)
9. Best practice: applying 'styled' to components imported from other modules 
10. Best practice: installing a theme or plugin to pervent access to WP frontend


note: The two package.json / readme file locations are a bit confusing


## WIP: SEO bits and bobs ###

1) Zeit Now deployment 

Now recommends setting domains to point at their nameservers.
Or, alternatively setting CNAME/ANAME DNS records

- CNAME works for subdomains (www.) but you can not set CNAME records on the root i.e. example.com
- Not all domain registrars support ANAME records.
- My current deployment is set to use Zeit Nameservers
- You can set DNS records via the Now cli
- https://zeit.co/blog/now-dns / https://zeit.co/docs/v2/advanced/domains/dns/

Duplicated Content

- Do add canonical links to your index
- Self referncing canonical links are OK
<link rel="canonical" href="https://example.com/" />

robots.txt

- You can create a robots text via now.json (routes)
- You DO NOT need to do this manually for Frontity

www/non-www redirects

- Also possible via now.json (routes)
- To Do: https://zeit.co/guides/redirect-from-www/

Sitemaps
- TBC

To Test/Implement: title/meta / Frontity Yoast module
- TBC


## To Do: Features >>>>>>
- Content: load WP pages and create cpt/acf
- ACF / Custom post type support
- ACF / Custom taxonomies support
- Widget blocks (CPT, facebook, twitter, instagram, pinterest)


## To Do: Later >>>>>>

1. Merge with Boostrap branding kit.
2. Add: WP theme support and user configurables
3. Refine: Animation, use scale and overlap tweens
4. Add: Create/Extend animations to pass user configuration
5. AMP


## Performance Comparrison Testing (WIP)
Check back for links to compare the performance of various deployments.  

Now: https://now.primitivedigital.uk  
Google: TBC  
AWS: TBC  
Static: TBC  


## Created by Primitive Digital
### https://primitivedigital.uk

![screenshot](img/webby.png)

Setup
-----

The following pre-requisites should be in place for the theme to work:

1. WordPress install of version 5.0 or later
2. Optional but highly recommended: register a domain
3. If deploying to Now install WordPress to a sub directory e.g. - wp.example.com
4. Posts permalink set set to: Custom Structure e.g. - `/posts/%postname%/`
5. Set homepage to a static page

To be added in next release(s) (WIP)
6. ACF Plugin vs Register custom fields
7. CPT UI Plugin vs Register custom post types
8. ACF Category permalink to be set as: Custom base - `/products/`

Installing and beginning development
------------------------------------

*** Follow the Frontity setup outlined in their Docs ***

https://docs.frontity.org/getting-started/quick-start-guide


1. `git clone https://github.com/primitiveshaun/primitiveone`
2. `cd primitiveone`
3. `npm install && npx frontity dev (from the project's root directory)`

** Quick Ref: Commands **

npx frontity dev  

npx frontity build  


Deployment
------------------------------------

*** Follow the Frontity deployment outlined in their Docs ***

https://docs.frontity.org/installation-and-deploy

npx now  
npx now --prod  


------------------------------------

The code is opensource so play like you mean business.

Enjoy!


#### Need Support
-------

If you find any problems with this theme, please report an issue at:  
https://github.com/primitiveshaun/primitiveone/issues

#### Primitive One created by Primitive Digital
##### https://primitivedigital.uk

![screenshot](img/haveyouseenit.jpg)
