newdistrict.github.io
=====================

# Front End Parts

1. [Fixed navigation/cart area](#1-fixed-navigationcart-area)
2. [Notifications Section](#2-notifications-section)
3. [Winery Hero Banner/Navigation](#3-winery-hero-bannernavigation)
4. [Wine Categories/Controls](#4-wine-categoriescontrols)
5. [Wine Category Info](#5-wine-category-info)
6. [Grid Product View](#6-grid-product-view)
7. [Banner Product View](#7-banner-product-view)
8. [Section Separator](#8-section-separator)
9. [Full Product Page](#9-full-product-page)




## 1. Fixed navigation/cart area  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/main_navigation/main-nav-cart.html>  
Preview: <http://deadtype.ca/newdistrict/>  

***

  
  
This section includes a wordmark, which should take the user back to the main "new district page" (whatever that entails in the current version of the site).

Opposite to the wordmark is the cart indicator. Due to the complicated nature of potential ordering options such as ordering single bottles, cases, and various 'mix and match' sets there is a number of elements needed for this section.


----


Using the following indicators we can provide clear information to the user about the state of their cart from anywhere in the website:


1. Total number of bottles in current cart. This excludes total number of bottles in mix and match sets as they are technically (as per guidance from Ben/Elin) not in cart until set is complete. Single bottles and cases immediately go to the cart total, mix and match orders stay in their 'mix and match' subcart until the set is full at which point it moves in the cart total with the singles bottles and cases.

2. Total number of bottles in 'mix and match' sets in current cart. If it is possible that a winery offers different mix and match sets (ex. specific wine selection that can only be included in a set of 6 and a different selection of wines that can only be included in a set of 12) then this number should add the totals from two sets. For example if there is a 3 wines in the set of 6 and 4 wines in the set of 12 then this number would show 7 bottles in 'mix and match' sets.

3. Total number of mix and match sets in current cart.

4. Total number of bottles required in 'mix and match' sets (6 and 12 from previous point) in current cart. If more then one set is present the numbers of combined. For example if there is a 3 wines in the set of 6 and 4 wines in the set of 12 then this number would show 18 as the number required to complete the 'mix and match' sets.


5. Total combined number of bottles in other carts (excluding number from current store the user is in). This excludes mix and match totals.

6. Total combined number of bottles in 'mix an match' sets in other carts (excluding number from current store the user is in).

7. Total number of mix and match sets in other carts (excluding number from current store the user is in).

8. Total combined number of bottles required 'mix and match' sets in other carts (excluding number from current store the user is in).


9. Total combined number of bottles in all carts.

10. Total combined number of mix and match sets in all carts.

11. Total combined number of bottles in 'mix and match' sets in all carts.

12. Total combined number of bottles required in 'mix and match' set in all carts.


----


The indicators have comments next to them to explain the numbers. These need to adjust with the changes in the number in order to have proper wording. For example '1 bottle in cart' vs '2 bottles in cart' and '4 bottles out of 12 in 1 mix and match set" vs '6 bottles out of 24 in 3 mix and match sets'.


----


Individual stores will show current store cart total, current store mix and match totals and total cart number for other stores. 

When the user is in the overall market place vs a specific store the cart indicator should show total combined numbers for bottles in all stores.

The exact orderering in presence of these will be finalized as towards the end of the project.



----

## 2. Notifications Section

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/main_navigation/main-nav-cart_notifications.html>  
Preview: <http://deadtype.ca/newdistrict/notifications_demo.html>


An area for notifications. Notifications should fade in and fade out. When numerous notifications occur they should stack on top of each other.

There is three potential behaviors:

1. Permanent notification, without an option to dismiss it. In this case this notification should always stay at the bottom closest to the "fixed navigation/cart area". If others appear they would appear above it. 

2. Dismissable notification, — users can dismiss it by clicking the x button. This type of notification typically requires users attention and likely links to a single or several actions through links in the notification text. Ex. 'A bottle of Zinfandel 2012 in your Estate Farms Cart is running low on stock. Complete the purchase now.' This notification would take the user to the cart when pressed or alternatively provide three links, to the Zinfandel 2012 full wine page, to Estate Farms Cart and directly to the cart in order to complete the purchase. 

3. Dismissable time-controlled notification, - will fade out after a set period of time or a user can dismiss it immediately by clicking the x button.   

----

## 3. Winery Hero Banner/Navigation

Preview: <http://deadtype.ca/newdistrict>

This section consists of 4 major components; constant navigation/winery title and 4 content slides (which potentially could expand in future to more as more content is added).  

The functionality of the section largely mirrors Royal slider example at <http://dimsemenov.com/plugins/royal-slider/content-slider/>. The section height can varied depending on the design/content of individual slides. For example it could be tied to the viewport (intro slide) or a proportion of it (ex. 75% — a possible height for the the location slide) or start at viewport height or expand to accommodate the length of included content if it is longer then viewport (ex. about slide). The slides will use fade-out/fade-in transition, while sliding to change height. 

Each slide should have a specfic address, so that a specific slide can be linked to.

1. [Winery Title/Navigation](#1-winery-titlenavigation)
2. [Winery Hero Photo Slide](#2-winery-hero-photo-slide)
3. [Location Slide](#3-location-slide)
4. [About Slide](#4-about-slide)
5. [Contact Slide](#5-contact-slide)



### 1. Winery Title/Navigation  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/hero_banner/slider_navigation.html>  
Preview: <http://deadtype.ca/newdistrict>


The purpose of the title/navigation is to provide a consistent way to navigate between the slides included in this section.  

Clicking on the winery title should take the user to the 'first slide/landing page' (Winery Hero Photo).  

Then there are 3 links in the navigation linking user to the additional 3 slides 'about', 'location', and 'contact'.  

This section always sits on top of the slides (whether overlapping the slide or not — currently not in this visual iteration).


### 2. Winery Hero Photo Slide  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/hero_banner/hero_photo_slide.html>  
Preview: <http://deadtype.ca/newdistrict>  

The purpose for this home page / initial slide is to give the winery a magazine style full height cover page. The slide will have a place for a background image and needs script attached to ensure it dynamically resizes to always fit the height of the viewport minus the height of the [fixed navigation/cart area](#1-fixed-navigationcart-area) and the [winery Title/Navigation](#1-winery-titlenavigation). The basic script currently included does an ok job at doing this but with some minor miscalculations.

Ben and Elin need controls to add the background image and potentially a second smaller portrait sized image (can be used for art direction in order to provide a more fitting image on smaller, portrait sized screens). We will need to generate a 1X and 2X images from uploaded photos (will request Ben/Elin to upload high resolution versions) and create dynamic media queries in CSS to replace images on low and high resolution screens.

B/E also need a control to set the primary color of [winery Title/Navigation](#1-winery-titlenavigation) to be either black or white. This will help them art direct photos, whether they are light or dark. However this may not be necessary anymore as this section is above the image.

Above the photo is an optional 'tint' div which should enable Ben and Elin to add a white, black overlay to the photo and set its opacity. Alternatively is the photo does not require it they should be able to select no overlay in which case the div is hopefully not generated. The purpose of this div is to prepare certain photos for overlay of content over the image.


Currently the overlayed content a vertically/horizontally centered placeholder for an optional logo, which can be used to add an inline SVG logo (inline SVG will enable us to provide a CSS control for changing the logo color vs uploading two images). Ben/Elin need to be able to change size, opacity and color (either black or white). If browser does not support inline SVG (<=IE8) we can just hide this div.

Because of the full height nature of this slide, it works well for setting the theme to the winery but it may not be completely clear there is wine selection below. To counter this, there is an optional 'Browse Our Wines' link below. Clicking it will smooth scroll the page to the section immediately below. B/E need controls to turn it off or on and set its text.

### 3. Location Slide  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/hero_banner/location_slide.html>  
MAP API Call code: <https://github.com/deadtype/newdistrict/blob/master/_includes/hero_banner/location_slide_api_call.html>  
MAP Script code: <https://github.com/deadtype/newdistrict/blob/master/_includes/hero_banner/location_slide_script_call.html>  
Preview: <http://deadtype.ca/newdistrict/location_slide_demo.html>  

Location slide uses [Mapbox](https://www.mapbox.com/tour/) to generate a map for each winery. This is used instead of Google or Bing maps as it allows for a high level of customization for the map overall (ex. a completely custom tile design for new district) and can have Ben and Elin easily create multiple maps and customize each to fit the brand of the winery (ex. have monochrome maps with the highlight color using the winery brand color).  

After they do the editing in browser, Mapbox will generate code for them to plug into New District. Example:

```
<script>
var map = L.mapbox.map('map', 'examples.map-9ijuk24y')
    .setView([40, -74.50], 9);
</script>
```  

As you can see from [Demo Script](https://github.com/deadtype/newdistrict/blob/master/_includes/hero_banner/location_slide_script_call.html) there is additional code which I added (ex. enabling Retina tiles) which will be universal across all maps. We need a way to have them plug in this generic info provided into site, which will not overrule the custom settings added. 

### 4. About Slide  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/hero_banner/about_slide.html>  
Preview: <http://deadtype.ca/newdistrict/about_slide_demo.html>  

'About Slide' lets wineries include some written information about themselves. 

Underlying the slide is an optional background image (same idea applies as the [Winery Hero Photo Slide](#2-winery-hero-photo-slide)) and an optional 'tint' div with the same controls as in [Winery Hero Photo Slide](#2-winery-hero-photo-slide). The idea is that the 'about' information can be overlayed on top of image if it is appropriate or may be set on a clean white background.

The actual content includes an optional title and a content section (which may be limited by character count — this part has not been finalized yet). B/E should be able to be set the title or content to to black or white color.

The size of this slide behaves slightly differently. Ideally this slide would be the same height as the [Winery Hero Photo Slide](#2-winery-hero-photo-slide), [Location Slide](#3-location-slide) or [Contact Slide](#5-contact-slide). However the content (if not limited by character count) may be longer and not fit this height. 

Thus the height of this section should be set to at least the same height as the two other slides, which is the height of the viewport minus the height of the [fixed navigation/cart area](#1-fixed-navigationcart-area) and the [Winery Title/Navigation](#1-winery-titlenavigation). If the div containing this content is longer then app. 75% (or whatever % we decide) of the height of the section then the section height should switch to auto and grow with the content.

### 5. Contact Slide  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/hero_banner/contact_slide.html>  
Preview: <http://deadtype.ca/newdistrict/contact_slide_demo.html>  

This slide is very similar to [About Slide](#4-about-slide), B/E need to be able to add an optional photo, set black, white or no overlay and its opacity, adjust color of text to black or white. The content for this section begins with winery website and email and expands to provide more links to social media as they are added.

The height of the slides behaves like [Winery Hero Photo Slide](#2-winery-hero-photo-slide), [Location Slide](#3-location-slide).  

--- 

## 4. Wine Categories/Controls   

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/product_preview_info_controls/product_selection_controls.html>  
Preview: <http://deadtype.ca/newdistrict>   

This section provides users with controls to focus available wine to a specific collection ('select collection') or change the view ('select view').

Both 'select collection' and 'select view' will reveal a drop down menu where user can select the wine collection or the view (this one only includes two options 'Editorial View' - aka. banner and 'At A Glance View' — aka. grid view. Both will act like the collection button does on [hard graft](http://www.hardgraft.com). Making a selection in either of these controls at any point of the page sets the user to the top of the wine selection section.

Selecting a specific collection hides all wines in not that collection. 'Select collection' control is independent from 'select view' control — meaning that if the site is set to grid view changing collection does not reset the view. If the winery has set no collections the button still remains here, however it will only have one choice — 'all wines'.

The third control is the 'winery title', which sits in between the two select controls, keeps the user aware of the store they are in, and provides a way to smooth scroll up to the top for when user has scrolled down deep into the wine selection page. Alternatively it also let users get back to 'Winery Hero Banner' — more on this below.

----

While exploring wine selection it is important to have these controls constantly available to the user. Thus the section needs to become fixed to the top of the screen after it reaches the top of the screen, an good example of this is [Food Studio Website](http://foodstudio.no).

Preview of fixed controls over the wine page: <http://deadtype.ca/newdistrict/product_preview.html>


---- 

Notice that the preview above lacks the Winery Hero Banner.  

The goal is to focus the user on the wine selection once they get to it without having additional distractions. So effectively the site has two section 'Winery Hero Banner' - which informs about the store and the 'Wine Selection Section' - which lets users shop the wines. 

The design of the 'Wine Selection Section' aims to have it be able to stand alone, even without the 'Winery Hero Banner'. Having a way to show just the wine selection standalone also lets us provide users with a link directly to the store.


---  

The behavior for the controls and presence/absence of the 'Winery Hero Banner' is as follows.

If the user got to the page with the 'Winery Hero Banner' present:

1. 'Categories/Controls' start offscreen, below the 'Winery Hero Banner'.  

2. Once the user scrolls and 'Categories/Controls' get to the top they become fixed and stick to the top of the screen. If the user scrolls back immediately they get back to the 'Winery Hero Banner'. 'Categories/Controls' become unfixed if the user scroll back up. A good demo of this is [Food Studio Website](http://foodstudio.no).  
  
      Clicking on the 'winery title' in this stage should smooth scroll the user to the top of the 'Winery Hero Banner'.

3. For the next 300-500px (number can be decided after) of downward scroll — if the user changes their mind and scrolls back to the top they get back to the 'Winery Hero Banner. This lets the users who are just exploring the site initially see that there is a wine selection below and still easily get back to the top section to explore the details about the winery.   
  
      Clicking on the 'winery title' in this stage should smooth scroll the user to the top of the 'Winery Hero Banner'.

4. If scrolled down far enough > 500px (number can be decided after) we assume the user is in the 'explore the wines/shopping' mode.  At this point 'Winery Hero Banner' gets hidden and cannot be returned to by scrolling anymore. Reasoning being the user can scroll up and down quickly, select collections and change views in their focused shopping section without accidentally getting back the 'Winery Hero Banner' and breaking the experience.  
  
       Clicking on the 'winery title' in this stage should smooth scroll the user to the top of the 'Wine Selection Section' with the 'Winery Hero Banner' hidden and not available via scrolling.  
  
       Once the user is at the top of the wine selection section an arrow pointing up appears at the top of the 'winery title' (File: <https://github.com/deadtype/newdistrict/blob/master/_includes/product_selection_info.html>)
 — here clicking on either the arrow or the 'winery title' should reveal the 'Winery Hero Banner' and smooth scroll up to it.  

5. Once the user has scrolled past >500px once and has turned off the 'Winery Hero Banner' or alternatively got to the 'Wine Selection Section' via a direct link the behavior of the 'winery title' is as follows:  
  
      a) If the user is at the top of the 'Wine Selection Section' the the 'winery title' has an arrow above it and both of them link back to the 'Winery Hero Banner' revealing it and smooth scrolling to the top of it.  

      b) If the user is within the 0px-500px of the top (or better yet the length of the 'Category Description' — discussed below) then the 'winery title' still retains the arrow above it and clicking either of them links user back to the 'Winery Hero Banner' revealing it and smooth scrolling to the top of it.  
      
      c) If the user is past >500px from the top of the 'Wine Selection Section' then the arrow fades away and the 'winery title' now links the user to the top of the 'Wine Selection Section' by smooth scrolling to the top of it. Once there the arrow fades in again and we get back to situation a) 
      
----

The standalone 'Wine Selection Section' aka <http://deadtype.ca/newdistrict/product_preview.html> needs to have a specific link attached to it so that it can be linked to directly. This way we can also potentially avoid forcing the user to download the images and content of the 'Winery Hero Banner', — defer and lazy load them upon request.

Additionally clicking on the Browse our Wines link in the [Winery Hero Photo Slide](#2-winery-hero-photo-slide) should smooth scroll the users to this standalone, linked 'Wine Selection Section' and hide the 'Winery Hero Banner'.  

## 5. Wine Category Info  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/product_preview_info_controls/product_selection_info.html>  
Preview: <http://deadtype.ca/newdistrict/product_preview.html>  

This is a simple section which reflects the selected collection via title, selected view by the description below the title and an optional blurb of text below it which describes the selected collection.
  
## 6. Grid Product View  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/product_preview/product_view_grid.html>  
Preview: <http://deadtype.ca/newdistrict/product_preview.html>  

Ben/Elin need controls to add an image. As suggested before in the winery hero slide we will need to generate a 1X and 2X images from uploaded photos. For this section we are not using a background image, as the grid items require a consistent look between included items and background-position controls are not precise enough for this. 

Information needed to be generated and editable is Name, Year, Price, and Volume.

Two controls are necessary: 'add to cart' and 'more info'. Clicking 'more info' should fade in the banner associated with the grid item as well as lower opacity of all other grid items. As grid items fade out and banner is faded in, 'more info' link transfroms into 'hide info'. Clicking 'hide info' reverses the interaction by hiding the banner and fading in other items. Alternatively clicking anywhere outside of the active grid item or displayed banner should activate the 'hide info' interaction.

Preview: <http://deadtype.ca/newdistrict/grid_focusedon_banner.html> 



## 7. Banner Product View  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/product_preview/product_view_banner.html>  
Preview: <http://deadtype.ca/newdistrict>  

Banner view is similar to the Winery Hero Photo Slide.

Ben and Elin need controls to add the background image and potentially a second smaller portrait sized image (can be used for art direction in order to provide a more fitting image on smaller, portrait sized screens). We will need to generate a 1X and 2X images from uploaded photos (will request Ben/Elin to upload high resolution versions) and create dynamic media queries in CSS to replace images on low and high resolution screens.

Overlaying the image there is an optional tint division, which should let B/E set its colour to black, white or transparent, and set the opacity. On top of the image lie three possible text layouts (activated by css classes: 'banner_left', 'banner_center' and 'banner_right'). B/E need controls to change color to black or white and choose one of the three layouts.  

## 8. Section Separator 

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/misc/section_separator.html>  
Preview: <http://deadtype.ca/newdistrict>   

A small helper component used to separate sections of content. For example it can be used to segregate production years in the product section.

## 9. Full Product Page  
  
Files:  <https://github.com/deadtype/newdistrict/blob/master/_includes/product_full_page/product_full_page_controls.html> 
<https://github.com/deadtype/newdistrict/blob/master/_includes/product_full_page/product_full_page_intro.html>  
<https://github.com/deadtype/newdistrict/blob/master/_includes/product_full_page/product_full_page_info_section.html>

Preview: <http://deadtype.ca/newdistrict>   

