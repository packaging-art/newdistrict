newdistrict.github.io
=====================

# Front End Components

1. [Fixed navigation/cart area](#1-fixed-navigationcart-area)
2. [Notifications Section](#2-notifications-section)
3. [Winery Hero Banner/Navigation](#3-winery-hero-bannernavigation)

## 1. Fixed navigation/cart area  

File: <https://github.com/deadtype/newdistrict/blob/gh-pages/_includes/main-nav-cart.html>  
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



----

## 2. Notifications Section

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/main-nav-cart_notifications.html>  
Preview: <http://deadtype.ca/newdistrict/notifications_demo.html>


An area for notifications. Notifications fade in and fade out. When numerous notifications occur they stack on top of each other.

There is three potential behaviors:

1. Permanent notification, without an option to dismiss it. In this case this notification should always stay at the bottom closest to the "fixed navigation/cart area". If others appear they would appear above it. 

2. Dismissable notification, — users can dismiss it by clicking the x button. This type of notification typically requires users attention and likely links to a single or several actions through links in the notification text. Ex. 'A bottle of Zinfandel 2012 in your Estate Farms Cart is running low on stock. Complete the purchase now.' This notification would take the user to the cart when pressed or alternatively provide three links, to the Zinfandel 2012 full wine page, to Estate Farms Cart and directly to the cart in order to complete the purshase. 

3. Dismissable time-controlled notification, - will fade out after a set period of time or a user can dismiss it immediately by clicking the x button.   

----

## 3. Winery Hero Banner/Navigation

Preview: <http://deadtype.ca/newdistrict>

This section consists of 4 major components; constant navigation/winery title and 3 content slides (which potentially could expand in future to more as more content is added).  

The functionality of the section largely mirrors Royal slider example at <http://dimsemenov.com/plugins/royal-slider/content-slider/>. The section height can varied depending on the design/content of individual slides. For example it could be tied to the viewport (intro slide) or a proportion of it (ex. 75% — a possible height for the the location slide) or start at viewport height or expand to accommodate the length of included content if it is longer then viewport (ex. about slide). The slides will use fade-out/fade-in transition, while sliding to change height. 

Each slide should have a specfic address, so that a specific slide can be linked to.

1. [Winery Title/Navigation](#1-winery-titlenavigation)
2. [Winery Hero Photo Slide](#2-winery-hero-photo-slide)
3. [Location Slide](#3-location-slide)
4. [About Slide](#4-about-slide)



### 1. Winery Title/Navigation  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/slider_navigation.html>  
Preview: <http://deadtype.ca/newdistrict>


The purpose of the title/navigation is to provide a consistent way to navigate between the slides included in this section.  

Clicking on the title should take the user to thef 'first slide/landing page' (Winery Hero Photo).  

Then there are 3 links in the navigation linking user to the 'first slide/landing page' (Winery Hero Photo), 'location slide', and 'about the winery' slide.  

The section always sits on top of the slides.


### 2. Winery Hero Photo Slide  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/hero_photo_slide.html>  
Preview: <http://deadtype.ca/newdistrict>  

The purpose for this home page / initial slide is to give the winery a magazine style full height cover page. The slide will have a place for a background image and a script attached to ensure it dynamically resizes to always fit the height of the viewport minus the height of the [fixed navigation/cart area](#1-fixed-navigationcart-area). The basic script included does an ok job at doing this but does not work as well as it should.

Ben and Elin need controls to add the background image and potenially a second smaller portrait sized image (will be used for art direction on smaller portrait sized screens). We will need to generate a 1X and 2X images from uploaded photos and create dynamic media queries in CSS to replace images on low and high resolution screens.

Ben and Elin also need a control to set the primary color of [winery Title/Navigation](#1-winery-titlenavigation) to be either black or white. This will help them art direct photos, whether they are light or dark. However this may not be neccesary anymore as the image is not frame by text and white space.

Above the photo is a tint div which should enable Ben and Elin to add a white, black or no overlay to the photo and set its opacity.

With these controls this cover slide can be customized be used effectively with a variety of photos.

Additionally there is a vertically/horizontally centered placeholder for an optional logo, which can be used to add an inline SVG logo (inline SVG will enable us to provide a CSS control for changing the logo color vs uploading two images). Ben/Elin need to be able to change size, opacity and color (either black or white). If browser does not support inline SVG (<=IE8) we can just hide this div.

Because of the full heigh nature of this slide, it works well for setting the theme to the winery but it may not be completely clear there is wine selection below. To counter this, we include a 'Browse Our Products' link below. Clicking it will smooth scroll the page to the section immediately below.  

### 3. Location Slide  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/location_slide.html>  
MAP API Call code: <https://github.com/deadtype/newdistrict/blob/master/_includes/location_slide_api_call.html>  
MAP Script code: <https://github.com/deadtype/newdistrict/blob/master/_includes/location_slide_script_call.html>  
Preview: <http://deadtype.ca/newdistrict/location_slide_demo.html>  

Location slide uses [Mapbox](https://www.mapbox.com/tour/) to generate a map for each winery. This is used instead of Google or Bing maps as it allows for a high level of customization for the map overall (ex. a completely custom tile design for new distric) and can have Ben and Elin easily create multiple maps and customize each to fit the brand of the winery (ex. have monochrome maps with the highlight color using the main brand color).  

After they do that editing in browser the site will generate code for them that they will need to plug into New District. Example:

```
<script>
var map = L.mapbox.map('map', 'examples.map-9ijuk24y')
    .setView([40, -74.50], 9);
</script>
```  

As you can see from [Demo Script](https://github.com/deadtype/newdistrict/blob/master/_includes/location_slide_script_call.html) there is additional code which I added (ex. enabling Retina tiles) which will be universal across all maps.   

### 4. About Slide  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/about_slide.html>  
Preview: <http://deadtype.ca/newdistrict/about_slide_demo.html>  





