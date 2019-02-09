# company-api-billing

DigiPro Media RESTful Company API by rj@digipromedia.com
Platform: NodeJS

# Installation:

- Clone this repo in the desired webserver directory
- run npm install command

# Windows IIS Deployment

Application Request Routing dependency is a must config, that way Node will run on production mode
by accepting requests via port 80 or 443 and proxy route to 3000 so other IIS http sites work normally.

1. Install URL Rewrite and ARR module for IIS if not already present (ARR goes on top level server, not a site)
2. On the Application Request Routing page, Check Enable proxy and apply.
3. Create Website in IIS Manager that will run the NodeJS application and clone this repo within.
4. The existing Web.config can be configure as desired.
