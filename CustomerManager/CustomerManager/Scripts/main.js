require.config({
    baseUrl: '../app',
    urlArgs: 'v=1.0'
});

require([
  '../app/customersApp/animations/listAnimations.js',
  '../app/app.js',
  '../app/customersApp/directives/wcUnique.js',
  '../app/customersApp/services/routeResolver.js',
  '../app/customersApp/services/config.js',
  '../app/customersApp/services/customersBreezeService.js',
  '../app/customersApp/services/authService.js',
  '../app/customersApp/services/customersService.js',
  '../app/customersApp/services/dataService.js',
  '../app/customersApp/services/modalService.js',
  '../app/customersApp/services/httpInterceptors.js',
  '../app/customersApp/filters/nameCityStateFilter.js',
  '../app/customersApp/filters/nameProductFilter.js',
  '../app/customersApp/controllers/navbarController.js',
  '../app/customersApp/controllers/orders/orderChildController.js'
], function() {
  angular.bootstrap(document, ['customersApp']);
});
