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
10. ['Add to Cart' Modal](#10-add-to-cart-modal)




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

Preview: <http://deadtype.ca/newdistrict/product_grid_focusedon_banner.html> 



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
<https://github.com/deadtype/newdistrict/blob/master/_includes/product_full_page/product_full_page_list_entry.html>

Preview: <http://deadtype.ca/newdistrict>   

This page is reached via the more info link in Banner View. The design recycles components used on other pages.  

It starts with fixed [navigation pattern](https://github.com/deadtype/newdistrict/blob/master/_includes/product_full_page/product_full_page_controls.html) similar to the [Wine Categories/Controls](#4-wine-categoriescontrols) but adjusted for the actions needed on this page:  

The left link duplicates the functionality of the back button. It needs to be be aware of the state of the previous page and reflect if in the wording. For example, — if user reached the 'Full Product Page' from product view focused on 'Summer 2007 Reds Collection' this button would say "Back to Summer 2007 Reds". It should also have a max character limit after it which it would be appended with an ellipsis. This prevents the design breaking in case of excessively long names, while retaining its contextual information.  

The link on the righ is 'add to cart'.  

In the middle once again we have the winery title, which behaves identically to the extensive interactions described in the [Wine Categories/Controls](#4-wine-categoriescontrols). If page is scrolled down, clicking it smooth scrolls the user to the top of the page. If user is at the top of the page, the arrow fades in and clicking either he arrow or the winery title, unhides the [Winery Hero Banner/Navigation](#3-winery-hero-bannernavigation) and smooth scrolls to the top.

----   

Below the fixed navigation we recycle the [Wine Title/Meta info pattern](https://github.com/deadtype/newdistrict/blob/master/_includes/product_full_page/product_full_page_intro.html) used on the 'Grid Product View' to show the wine title and information such as 'price', 'volume' and 'year of make'. 


This is follow by an image below, this may be the same image used on banner or a different image alltogether. Likely uploaded by B/E it will need to accept two versions: portrait for small screens and landscape for larger. 1x and 2X versions will be needed.

Past the image we get into the 'wine summary', which is simply the extended version of the text that appeared in the 'Banner Product View'.  

Below it are several sections such as 'Tasting Notes', 'Food pairings', 'Additional Notes'([template](https://github.com/deadtype/newdistrict/blob/master/_includes/product_full_page/product_full_page_info_section.html)) and 'Awards'([template](https://github.com/deadtype/newdistrict/blob/master/_includes/product_full_page/product_full_page_list_entry.html)). These will be editable by winery owners in the backend.  

## 10. 'Add to Cart' Modal  

Files:  
1. Outer Structure  
   <https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_outer_structure.html>  
2. Cancel Button  
   <https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_cancel.html>  
3. Section 1: Image  
   <https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_image_section.html>  
4. Section 2: Quantity  
   <https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_quantity_section.html>  
5. Optional Section 3: Destination  
   <https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_destination_section.html>  
6. Section 4: Summary  
   <https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_summary_section.html>  
7. Section 5: Action Buttons  
   <https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_action_section.html>  
  
----  

#### Previews:  
(not covering all possibilities, but showcasing ways to deal with variations in each 'add to cart' modal section)   

Unconstrained bottle order  
   <http://deadtype.ca/newdistrict/modal_addtocart_unconstrained.html>  

Unconstrained bottle order with a 'Mix and Match' set active  
   <http://deadtype.ca/newdistrict/modal_addtocart_unconstrained_plusmix.html>  

Minimum purchase of a case required (single case)  
   <http://deadtype.ca/newdistrict/modal_addtocart_single_case.html>  

Minimum purchase of a case required with a 'Mix and Match' set active  
   <http://deadtype.ca/newdistrict/modal_addtocart_single_case_plusmix.html>  

Minimum purchase of a case required with multiple case quantities  
   <http://deadtype.ca/newdistrict/modal_addtocart_multiple_cases.html>  

Initial 'Mix and Match' order  
   <http://deadtype.ca/newdistrict/modal_addtocart_mix.html>  

'Mix and Match' order that does not complete the set  
   <http://deadtype.ca/newdistrict/modal_addtocart_mix_partial.html>  

'Mix and Match' order that completes a set  
   <http://deadtype.ca/newdistrict/modal_addtocart_mix_complete.html>  

'Mix and Match' order that completes a set and still has additional items  
   <http://deadtype.ca/newdistrict/modal_addtocart_mix_overflow.html>  

----  

#### Structure

'Add to Cart' modal is used universally across the website.  

Wineries can have a wide range of ordering options (including unconstrained orders, case orders and 'mix and match' sets) which can combine into multiple permutations. 'Add to Cart' modal is designed to organize this highly varied information into a structured, step by step process.


1. On clicking the 'add to cart' button anywhere on the site the modal window fades-in while simultaneously darkening the background, which should cover the whole site (will need a script for this). An example of this is the ['Super Scaled' transition on this site](http://tympanus.net/Development/ModalWindowEffects/). This is preview of the general look on [New District](http://deadtype.ca/newdistrict/modal_addtocart_unconstrained.html). The file showing the external structure is located [here](https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_outer_structure.html).  

2. The only way to exit or cancel out of adding the item to cart is to click the ['Cancel' button](https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_cancel.html), which sits below the modal window. The darkened background is transparent and scrollable, showing the site below, but is not clickable. This ensures no accidental clickouts happen, which could confuse the user. An example is at [modal cancel](http://deadtype.ca/newdistrict/modal_addtocart_unconstrained_plusmix.html).  

3. The first part of the modal is the [Image Element](https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_image_section.html) — which reuses the "grid product view" design patter. The key difference comes in the text at the bottom of the image — 'modal_comment'. This is a place were we provide contextual information about the wine. Such as its availability (single bottle, case or mix and match), and any specifics about it. See the various previews for the range of possible comments.

4. The second part is the [Quantity Section](https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_quantity_section.html). Depending on the context it can show more or less information about the wine being added. For example in case of the uncostrained order it can exist via a simple field ([Example](http://deadtype.ca/newdistrict/modal_addtocart_unconstrained.html)). If the winery has multiple cases sizes then this expands to numerous fields with labels about and below the field ([Example](http://deadtype.ca/newdistrict/modal_addtocart_multiple_cases.html)).  
  
       In uncostrained case the field entry is done in single bottle orders. In the scenario where field entry is about cases the label above states the number of bottles in each case and the number below show how many bottles the case order equates to (ex. 4 6-bottle cases = 24 bottles.  

5. The third part is a conditional [Destination Section](https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_destination_section.html) which only appears when the product being selected is available for both regular order (unconstrained ordering and case based) and 'mix and match' AND there is an open 'mix and match' present. It provides user with information about the options of adding the product and buttons to select the options.  
  
       The are to put the selected quantity in 'Cart' or into 'Mix and Match' (if the selected quantity is less then or equal to the amount requried to complete the 'mix and match' set). If the selected quantity is more then required to complete the 'mix and match' set then the button would turn into 'Cart + "Mix and Match". This would complete the set and add the overflow bottles to cart. See [Example](http://deadtype.ca/newdistrict/modal_addtocart_unconstrained_plusmix.html).  
  
       The situation is similar for ordering cases. For example when ordering a 6-bottle case and at the same time having a 12-bottle 'mix and match' set open (that must have at least 6 or more bottle spots available, if less then it is impossible to add the case and thus the option should not appear) then this option would present itself as well (See [Preview](http://deadtype.ca/newdistrict/modal_addtocart_single_case_plusmix.html)). Same pattern as above to overflow and multiple case orders, — put all in cart or put some in cart and augment the 'mix and match' set with a suitable case.  
  
       The options described above start unselected. While they are unselected no next section appears for the user. Effectively they can either select one of the options to have the next section appear (fade-in) or use the cancel button to exit the 'add to cart' modal.   

6. The fourth part is the [Summary Section](https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_summary_section.html). If the Destination Section (described above) was not required (if product is not available for both regular order and 'mix and match') this section appears directly after quantity. If Destination section was required, this section appears after user makes a selection.  
  
       This section provides context about the options the user have selected and outlines what quantities of what bottles are going where. It basically has 2 sections:    

       1. A summary paragraph ('modal summary') outlining what bottles go where (cart, 'mix and match'), whether the users need to take any actions after, whether a new 'mix and match' set was created.  
        
       2. "Mix and match" summary ('modal_mix_and_match_summary') — this appears in the scenarios where destination had to be chosen and changes occured to the 'mix and match' set. This would have contain a paragraph describing what is happening to the set and a list ('modal_mix_match_list') listing the items in the set.  
         
         See examples for various ways the summary section can appear. For the paragrahs we will likely get B/E to define the wording and then we will replace thin like bottle numbers accoring to context.   

7. The fifth section is the [Action Buttons](https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_action_section.html).   
        
       This has two buttons: 
       
       1. A conditional 'Checkout Now' button, which would hide if the user only has a 'Mix and Match' set and it does not have enough items in it to move it to cart.
         
       2. A 'Continue Shopping' button which takes user back to the context they were in — what ever page they were on when they clicked 'add to cart'

       
