newdistrict.github.io
=====================

# Front End Components

## 1. Fixed navigation/cart area. 

File: <https://github.com/deadtype/newdistrict/blob/gh-pages/_includes/main-nav-cart.html>  
Preview: <http://deadtype.ca/newdistrict/>

***

  
  
This section includes a wordmark, which should take the user back to the main "new district page" (whatever that entails in the current version of the site).

Opposite to the wordmark is the cart indicator. Due to the complicated nature of potential ordering options such as ordering single bottles, cases, and various 'mix and match' sets there is a number of elements needed for this section.


----


Using the following indicators we can provide a clear indicator to the user about the state of their cart from anywhere in the website:


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

##2. Notifications Section

File: <https://github.com/deadtype/newdistrict/blob/gh-pages/_includes/main-nav-cart_notification_center.html>  
Preview: <http://deadtype.ca/newdistrict/notifications.html>


An area for notifications. Notifications fade in and fade out. When numerous notifications occur they stack on top of each other.

There is three potential behaviors:

1. Permanent notification, without an option to dismiss it. In this case this notification should always stay at the bottom closest to the "fixed navigation/cart area". If others appear they would appear above it. 

2. Dismissable notification, — users can dismiss it by clicking the x button. This type of notification typically requires users attention and likely links to a single or several actions through links in the notification text. Ex. 'A bottle of Zinfandel 2012 in your Estate Farms Cart is running low on stock. Complete the purchase now.' This notification would take the user to the cart when pressed or alternatively provide three links, to the Zinfandel 2012 full wine page, to Estate Farms Cart and directly to the cart in order to complete the purshase. 

3. Dismissable time-controlled notification, - will fade out after a set period of time or a user can dismiss it immediately by clicking the x button.
