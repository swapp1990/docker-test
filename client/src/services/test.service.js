import http from "../http-common";

class TestDataService {
  getAll() {
    return http.get("/test");
  }
}

export default new TestDataService();
