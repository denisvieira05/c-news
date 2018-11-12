import ServiceDataSource from "../ServiceDataSource";
import FakeInterestsApiDataSource from "./FakeInterestsApiDataSource";
import InterestsApiDataSource from "./InterestsApiDataSource";

class InterestsService extends ServiceDataSource {
  constructor() {
    super(FakeInterestsApiDataSource, InterestsApiDataSource);
  }

  getMyInterests() {
    return this.datasource().getMyInterests();
  }

  saveMyInterests(myInterests) {
    return this.datasource().saveMyInterests(myInterests);
  }
}

export default InterestsService;
