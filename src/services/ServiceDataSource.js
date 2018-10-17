import { API_ENVIROMENTS, BUILD_TYPES } from "./CONSTANTS";

class ServiceDataSource {
  constructor(mockDatasource, apiDataSource) {
    this.BUILD_TYPE = BUILD_TYPES.API;
    this.mockDatasource = mockDatasource;
    this.apiDataSource = apiDataSource;

    console.log(process.env.REACT_APP_SECRET_CODE);
  }

  datasource() {
    const action = {
      MOCK: () => new this.mockDatasource(),
      API: () => new this.apiDataSource(API_ENVIROMENTS.STAGE)
    };

    return action[this.BUILD_TYPE]();
  }
}

export default ServiceDataSource;
