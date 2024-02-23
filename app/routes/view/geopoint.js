import Route from '@ember/routing/route';

export default class ViewGeopointRoute extends Route {
  queryParams = {
    resource: { refreshModel: true }
  }

  model( { resource } ) {
    // Retrieve information about the given resource here
  }
}
