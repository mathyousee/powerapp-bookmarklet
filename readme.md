
# PowerApp Bookmarklet

Launch a canvas PowerApp from the context of an individual record in Dynamics 365 for Sales (without admin privileges).

The solution is a "bookmarklet" which is literally just a bookmark in the browser (the kind you have in your Favorites menu or bookmark bar). The URL is replaced with a little code behind that grabs the current record GUID, then opens a canvas PowerApp in a new window and passes along the record GUID as a Parameter.

## Manifest

- **bookmarklet.js** - the javascript that is used in the URL portion of the bookmark using the xrm.page object
- **CanvasPowerApp.zip** - an example function to parse the parameters passed to the app when the first screen of thecanvas PowerApp loads

## Usage
There are two main steps in using this:
- Create and publish a PowerApp that will know how to use the record GUID as a parameter
- Add a bookmarklet in your browser that you will use to launch the powerapp

### Create and publish a PowerApp
The details for building a canvas PowerApp are out of scope for this document. I do want to include the following example of filtering a data source in your app to a selected Opportunity record:
```
First(Filter(Opportunities,opportunityid=Param("record_id")))
```

### Add a bookmarklet
Adding the bookmarklet is very simple. 

- Create a new bookmark (use any website)
    - Perhaps *connectingthedata.com* if you're looking for inspiration :)
- Edit the bookmark 
    - Update the Name to reflect the label that will appear on the bookmark
    - Update the Location (URL) of the bookmark based on the bookmarklet.js file and update the following:
        - Replace the App URL with the one for your PowerApp
        - (Optional) Rename the *record_id* parameter

Even simpler (for the end user, but less so for the citizen developer) is to create the full script as a hyperlink that can be drag/dropped into the bookmark bar.

## Background
If you have System Customizer (or above) permissions within your evnrionment, it's easy enough to create a button inside of a model-driven PowerApp that would launch a canvas PowerApp in a new window. **For citizen developers who are looking to extend a model-driven PowerApp**. 

In my day job, I leverage the Dynamics 365 for Sales as a regular-old end-user, but I saw a need to provide a streamlined experience via a canvas app, but didn't want to re-build my existing model-driven experience that I use for views, searching, etc. 

I've used bookmarklets in the past to send a webpage to a service (I think it was Pocket...fwiw). Because I can pass a parameter into a PowerApp, I figured it'd be doable to grab the *GUID* for the record and pass it into the PowerApp. This is what I came up with. Note: it uses the *xrm.page* object to get the record GUID, which is deprecated.

# Requirements

You will need a full CDS / Customer Engagement v8.2 or greater Dynamics 365 instance that supports the xrm.page object. Tested in Chrome.

# Contributing

If you want to contribute reach out to me on LinkedIn.

# Legal

All contents are provided under the MIT License. See LICENSE.txt for more information.

All trademarks, service marks, trade names, and product names mentioned in this project and supporting documentation are the property of their respective owners.

# Attribution
http://www.leicht-bewoelkt.de/dynamics-crm-bookmarklets-v2 supplied an example bookmarklet for how to get the record ID in a bookmarklet. Thanks Benjamin John!