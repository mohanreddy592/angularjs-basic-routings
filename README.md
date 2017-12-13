# angularjs-basic-routings

download angular-ui-router.js file from https://ui-router.github.io/ng1/

include ui-router js file in index.html then only routing will work fine 

for content placeholder we need to use <ui-view></ui-view>> in html where you want to replace the content dynamically 

you should define all routings in app.config.js using $stateProvider

for url navigation you should use ui-sref attribute on anchor tag like 
<a ui-sref="home">Home</a>

$urlRouterProvider to inject default page in view