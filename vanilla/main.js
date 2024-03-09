import ky from 'ky';

export default class skApi {
    constructor(baseUrl, headers = {}) {
      this.baseUrl = baseUrl;
      this.headers = headers;
      this.endPoints = {
        insertCounsel: '/api/counsel/insert.do',
        infoSecRequest: '/api/inforsec/request.do',
        infoSecSave: '/api/inforsec/save.do',
        introSave: '/api/intro/save.do',
        customerIntro: '/api/customer-intro.do',
        officialReg: '/api/officialReg.do',
        uncomfortable: '/api/uncomfortable.do',
      };
    }
  
    async request(endpoint, method = 'GET', data = {}, options = {}) {
      const url = `${this.baseUrl}${endpoint}`;
      const kyOptions = {
        ...options,
        method,
        headers: {
          ...this.headers,
          'Content-Type': method === 'POST' ? 'application/json' : undefined,
          ...options.headers,
        },
        json: method === 'POST' ? data : undefined, 
      };
      try {
        const response = await ky(url, kyOptions);
        return await response.json();
      } catch (error) {
        throw error;
      }
    }
  
    get(endpoint, options = {}) {
      return this.request(endpoint, 'GET', {}, options);
    }
  
    post(endpoint, data, options = {}) {
      return this.request(endpoint, 'POST', data, options);
    }
  
    insertCounsel(data) {
      return this.post(this.endPoints.insertCounsel, data);
    }
  
    infoSecRequest(data) {
      return this.post(this.endPoints.infoSecRequest, data);
    }
  
    infoSecSave(data) {
      return this.post(this.endPoints.infoSecSave, data);
    }
  
    introSave(data) {
      return this.post(this.endPoints.introSave, data);
    }
  
    customerIntro(data) {
      return this.post(this.endPoints.customerIntro, data);
    }
  
    officialReg(data) {
      return this.get(this.endPoints.officialReg, data);
    }
  
    uncomfortable(data) {
      return this.post(this.endPoints.uncomfortable, data);
    }
  }
  