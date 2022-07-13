import http from "../http-common";

class TestDataService {
  getAll() {
    return http.get("/test");
  }

  login() {
    return http.post("/test/login");
  }
}

export default new TestDataService();
